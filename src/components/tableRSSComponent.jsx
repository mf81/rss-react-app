import React, { Component } from "react";
import _ from "lodash";
import Pagination from "./common/pagination";
import PrivNext from "./common/paginationPrivNext";
import { paginate } from "./common/paginate";
import OnlyTable from "./onlyTableComponent";
import Popup from "./common/popupComponent";
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import AddTooDb from "./common/addTooDbTable";
import Search from "./common/searchComponent";
import SearchMany from "./common/searchManyComponent";
import Author from "./common/author";

class RssTable extends Component {
  BACKEND_INTERFACE = "http://localhost:3000/api/rss/";
  //BACKEND_INTERFACE = "http://10.0.254.51:3000/api/rss/";

  state = {
    data: [],
    filter: "",
    filterAll: true,
    onFocusSearch: true,
    pageSize: 25,
    currentPage: 1,
    sortColumn: { sortBy: "rok", order: "desc" },
    fields: {
      imieNazwisko: {
        label: "Imie, Nazwisko",
        search: false,
        searchValue: ""
      },
      nr: { label: "Nr", search: false, searchValue: "" },
      rok: { label: "Rok", search: false, searchValue: "" },
      rokDW: {
        label: "Rok DW",

        search: false,
        searchValue: ""
      },
      nrDW: { label: "Nr DW", search: false, searchValue: "" },
      kodLokalu: {
        label: "Kod lokalu",
        search: false,
        searchValue: ""
      },
      polaczono: {
        label: "Połączono",
        search: false,
        searchValue: ""
      },
      adres: {
        label: "Adres",
        search: false,
        searchValue: ""
      },
      wartosc: {
        label: "Wartość",
        search: false,
        searchValue: ""
      },
      sygnaturaNakaz: {
        label: "Sygnatura Nakaz",
        search: false,
        searchValue: ""
      },
      rodzaj: {
        label: "Rodzaj ",
        search: false,
        searchValue: ""
      },
      ADM: { label: "ADM", search: false, searchValue: "" },
      okresDochodzony: {
        label: "Okres Dochodzony",
        search: false,
        searchValue: ""
      },
      wniesieniePozwu: {
        label: "Wniesienie Pozwu",
        search: false,
        searchValue: ""
      },
      orzeczenieNakaz: {
        label: "Orzeczenie Nakaz",
        search: false,
        searchValue: ""
      },
      sygnaturaSprzeciw: {
        label: "SygnaturaSprzeciw",
        search: false,
        searchValue: ""
      },
      orzeczenieSprzeciw: {
        label: "Orzeczenie Sprzeciw",
        search: false,
        searchValue: ""
      },
      sygnaturaApelacja: {
        label: "Sygnatura Apelacja",
        search: false,
        searchValue: ""
      },
      orzeczenieApelacja: {
        label: "Orzeczenie Apelacja",
        search: false,
        searchValue: ""
      },
      wystapienieOklauzule: {
        label: "Wystapienie Oklauzule",
        search: false,
        searchValue: ""
      },
      wniosekMajatku: {
        label: "Wniosek Majatku:",
        search: false,
        searchValue: ""
      },
      sygnAktWyjawienia: {
        label: "Sygnatura Akt Wyjawienia",
        search: false,
        searchValue: ""
      },
      orzeczenieWyjawienia: {
        label: "Orzeczenie Wyjawienia",
        search: false,
        searchValue: ""
      },
      etapPostEgz: {
        label: "Etap Postępowania Egzekującego",
        search: false,
        searchValue: ""
      },
      uwagi: {
        label: "Uwagi",
        search: false,
        searchValue: ""
      },
      przekazanoDoDP: {
        label: "Przekazano do DP",
        search: false,
        searchValue: ""
      },
      rozliczoneZastepstwa: {
        label: "Rozliczone Zastępstwa",
        search: false,
        searchValue: ""
      },
      radcaPrawny: {
        label: "Radca Prawny",
        search: false,
        searchValue: ""
      }
    }
  };
  async componentDidMount() {
    const { data } = await axios.get(this.BACKEND_INTERFACE);
    this.setState({ data });
  }

  handlePageChange = page => this.setState({ currentPage: page });

  handlePriv = () => {
    const statePriv = this.state.currentPage - 1;
    this.setState({ currentPage: statePriv });
  };

  handelNext = () => {
    const stateNext = this.state.currentPage + 1;
    this.setState({ currentPage: stateNext });
  };

  handlePageSize = size => this.setState({ currentPage: 1, pageSize: size });

  handleSort = sortColumn => this.setState({ sortColumn });

  handleAdd = async data => {
    const originalState = this.state.data;
    // const newState = [data, ...this.state.data];
    // this.setState({ data: newState });
    let res;
    try {
      res = await axios.post(this.BACKEND_INTERFACE, data);
    } catch {
      this.setState({ data: originalState });
    }
    const { _id } = res.data;
    const record = { _id: _id, ...data };
    this.setState({ data: [record, ...this.state.data] });
  };

  handleEdit = async (newData, oldData) => {
    const originalState = this.state.data;

    const data = [...this.state.data];
    const index = data.indexOf(oldData);
    data[index] = { ...newData };
    this.setState({ data });

    try {
      await axios.put(this.BACKEND_INTERFACE + oldData._id, newData);
    } catch {
      this.setState({ data: originalState });
    }
  };

  handleDelete = async data => {
    const originalState = this.state.data;

    const res = this.state.data.filter(d => d._id !== data._id);
    this.setState({ data: res });

    try {
      await axios.delete(this.BACKEND_INTERFACE + data._id);
    } catch {
      this.setState({ data: originalState });
    }
  };

  onFocusSearch = () => this.setState({ onFocusSearch: false });

  searchName = searchBy => {
    if (this.state.onFocusSearch) {
      let text;
      if (this.state.filterAll) {
        text = "Przeszukujesz baze po wszystkich polach";
      } else {
        text =
          "Przeszukujesz i sortujesz baze po polu: " +
          this.state.fields[searchBy].label;
      }
      return text;
    } else return "";
  };

  handleAllSearch = () => {
    const { fields, filterAll } = this.state;
    this.setState({
      onFocusSearch: true,
      filter: "",
      fields: {
        ...fields,
        rok: { ...fields.rok, search: true, searchValue: "" }
      },
      filterAll: !filterAll
    });
  };

  filterSearch = (filter, data, itemKey, filterAll) => {
    filterAll && (itemKey = "");
    const lowercasedFilter = filter.toLowerCase();

    const res = data.filter(item => {
      return Object.keys(item).some(key => {
        itemKey && (key = itemKey);
        return (
          typeof item[key] === "string" &&
          item[key].toLowerCase().includes(lowercasedFilter)
        );
      });
    });
    if (Array.isArray(res) && res.length) {
      return res;
    }
    return (data = [{ imieNazwisko: "non" }]);
  };

  filterSearchMany = (data, filterAll) => {
    const { fields } = this.state;
    Object.keys(fields)
      .filter(item => fields[item].search)
      .map(item => {
        const { search, searchValue } = fields[item];
        if (search && searchValue.length) {
          data = this.filterSearch(searchValue, data, item, filterAll);
        }
        return data;
      });
    return data;
  };

  handleOnOffSearch = ({ target }) => {
    const { fields } = this.state;
    const { name, value } = target;
    let valueAdd = "";
    !fields[name].search ? (valueAdd = "") : (valueAdd = value);
    this.setState({
      currentPage: 1,
      fields: {
        ...fields,
        [name]: {
          ...fields[name],
          search: !fields[name].search,
          searchValue: valueAdd
        }
      }
    });
  };

  onChangeSearchMany = ({ target }) => {
    const { fields } = this.state;
    const { name, value } = target;
    this.setState({
      currentPage: 1,
      fields: {
        ...fields,
        [name]: {
          ...fields[name],
          searchValue: value,
          search: true
        }
      }
    });
  };

  handleResetAll = () => {
    const fields = { ...this.state.fields };
    Object.keys(fields).map(i => {
      fields[i].searchValue = "";
      return (fields[i].search = false);
    });
    this.setState(fields);
  };

  render() {
    const {
      fields,
      filter,
      sortColumn,
      filterAll,
      currentPage,
      pageSize
    } = this.state;

    let filteredData = [];
    if (this.state.data.length) {
      filteredData = this.filterSearchMany(this.state.data, filterAll);
    } else filteredData = "";

    const { length: count } = filteredData;

    const sorted = _.orderBy(
      filteredData,
      [sortColumn.sortBy],
      [sortColumn.order]
    );

    const data = paginate(sorted, currentPage, pageSize);
    return (
      <Container fluid className="p-0">
        <Row className="sticky-top bg-light">
          <Col>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="/">Rejestr Spraw Sądowych</Navbar.Brand>
              <Nav className="mr-auto">
                <Popup
                  label="Pomoc techniczna"
                  title="Aplikacja:"
                  template={<Author />}
                  variant="link text-light"
                  closeButton="Zamknij"
                />
              </Nav>
              <Popup
                label="Dodaj nowy wpis do bazy"
                title="Dodaj wpis do bazy"
                template={
                  <AddTooDb
                    fields={fields}
                    doSubmit={this.handleAdd}
                    data={this.state.data}
                    extraProps
                  />
                }
                size="lg"
                btn="btn-light btn-lg"
                extraProps
              />
              <Button variant={"btn btn-light btn-sm m-1"} href="/">
                Odśwież
              </Button>
            </Navbar>
            <Container fluid className="sticky-top bg-light">
              <Row>
                <Col md={12}>
                  <Search
                    onChange={this.onChangeSearchMany}
                    placeholder={this.searchName(sortColumn.sortBy)}
                    handleAll={this.handleAllSearch}
                    filterAll={filterAll}
                    onFocus={this.onFocusSearch}
                    notFound={this.state.notFound}
                    sortBy={sortColumn.sortBy}
                    fields={fields}
                  />
                </Col>
              </Row>
              {!filterAll && (
                <Row>
                  <Col>
                    <SearchMany
                      fields={fields}
                      handleOnOffSearch={this.handleOnOffSearch}
                      onChangeSearchMany={this.onChangeSearchMany}
                      handleResetAll={this.handleResetAll}
                      sortBy={sortColumn.sortBy}
                    />
                  </Col>
                </Row>
              )}
              <Row>
                <Col md={12}>
                  <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                    onPriv={this.handlePriv}
                    onNext={this.handelNext}
                    currentPage={currentPage}
                    onPageSize={this.handlePageSize}
                    onFocus={this.onFocusSearch}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <OnlyTable
              fields={fields}
              data={data}
              sortColumn={sortColumn}
              onEdit={this.handleEdit}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              filter={filter}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <nav aria-label="Page navigation mx-auto">
              <ul className="pagination pagination-lg ">
                <PrivNext
                  count={count}
                  pageSize={pageSize}
                  onClick={this.handlePriv}
                  currentPage={currentPage}
                  label="Poprzednia"
                />
                <PrivNext
                  count={count}
                  pageSize={pageSize}
                  onClick={this.handelNext}
                  currentPage={currentPage}
                  label="Następna"
                  maxValue
                />
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RssTable;
