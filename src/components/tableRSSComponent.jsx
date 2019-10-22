import React, { Component } from "react";
import _ from "lodash";
import Pagination from "./common/pagination";
import PrivNext from "./common/paginationPrivNext";
import { paginate } from "./common/paginate";
import OnlyTable from "./onlyTableComponent";
import Popup from "./common/popupComponent";
import { Navbar, Nav } from "react-bootstrap";
import axios from "axios";
import AddTooDb from "./common/addTooDbTable";
import Search from "./common/searchComponent";
import SearchMany from "./common/searchManyComponent";

class RssTable extends Component {
  ip = {
    localhost: "http://localhost:3000/api/rss/",
    ip: "http://10.0.254.51:3000/api/rss/"
  };
  state = {
    data: [],
    filter: "",
    filterAll: true,
    onFocusSearch: true,
    pageSize: 100,
    currentPage: 1,
    sortColumn: { sortBy: "rok", order: "desc" },
    fields: {
      imieNazwisko: {
        label: "Imie, Nazwisko",
        firstSite: true,
        search: false,
        searchValue: ""
      },
      nr: { label: "Nr", firstSite: true, search: false, searchValue: "" },
      rok: { label: "Rok", firstSite: true, search: false, searchValue: "" },
      rokDW: {
        label: "Rok DW",
        firstSite: true,
        search: false,
        searchValue: ""
      },
      nrDW: { label: "Nr DW", firstSite: true, search: false, searchValue: "" },
      kodLokalu: {
        label: "Kod lokalu",
        firstSite: true,
        search: false,
        searchValue: ""
      },
      polaczono: {
        label: "Połączono",
        firstSite: true,
        search: false,
        searchValue: ""
      },
      adres: {
        label: "Adres",
        firstSite: true,
        search: false,
        searchValue: ""
      },
      wartosc: {
        label: "Wartość",
        firstSite: true,
        search: false,
        searchValue: ""
      },
      sygnaturaNakaz: {
        label: "Sygnatura Nakaz",
        firstSite: true,
        search: false,
        searchValue: ""
      },
      rodzaj: {
        label: "Rodzaj ",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      ADM: { label: "ADM", firstSite: false, search: false, searchValue: "" },
      okresDochodzony: {
        label: "Okres Dochodzony",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      wniesieniePozwu: {
        label: "Wniesienie Pozwu",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      orzeczenieNakaz: {
        label: "Orzeczenie Nakaz",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      sygnaturaSprzeciw: {
        label: "SygnaturaSprzeciw",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      orzeczenieSprzeciw: {
        label: "Orzeczenie Sprzeciw",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      sygnaturaApelacja: {
        label: "Sygnatura Apelacja",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      orzeczenieApelacja: {
        label: "Orzeczenie Apelacja",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      wystapienieOklauzule: {
        label: "Wystapienie Oklauzule",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      wniosekMajatku: {
        label: "Wniosek Majatku:",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      sygnAktWyjawienia: {
        label: "Sygnatura Akt Wyjawienia",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      orzeczenieWyjawienia: {
        label: "Orzeczenie Wyjawienia",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      etapPostEgz: {
        label: "Etap Postępowania Egzekującego",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      uwagi: {
        label: "Uwagi",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      przekazanoDoDP: {
        label: "Przekazano do DP",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      rozliczoneZastepstwa: {
        label: "Rozliczone Zastępstwa",
        firstSite: false,
        search: false,
        searchValue: ""
      },
      radcaPrawny: {
        label: "Radca Prawny",
        firstSite: false,
        search: false,
        searchValue: ""
      }
    }
  };
  async componentDidMount() {
    const { data } = await axios.get(this.ip.localhost);
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

    const newState = [data, ...this.state.data];
    this.setState({ data: newState });

    try {
      await axios.post(this.ip.localhost, data);
    } catch {
      this.setState({ data: originalState });
    }
  };

  handleEdit = async (newData, oldData) => {
    const originalState = this.state.data;

    const data = [...this.state.data];
    const index = data.indexOf(oldData);
    data[index] = { ...newData };
    this.setState({ data });

    try {
      await axios.put(this.ip.localhost + newData._id, newData);
    } catch {
      this.setState({ data: originalState });
    }
  };

  handleDelete = async data => {
    const originalState = this.state.data;

    const res = this.state.data.filter(d => d._id !== data._id);
    this.setState({ data: res });

    try {
      await axios.delete(this.ip.localhost + data._id);
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
    this.setState({
      onFocusSearch: true,
      filter: "",
      filterAll: !this.state.filterAll
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
    } else {
      filter.length &&
        (data = [
          {
            notFound:
              "Brak wyniku wyszukiwania - nie denerwuj się, spokojnie, spróbuj wpisać inną frazę i powodzenia :)"
          }
        ]);
      return data;
    }
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
      <React.Fragment>
        <div className="container-fluid p-0">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Rejestr Spraw Sądowych</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
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
          </Navbar>
          <Navbar bg="light" variant="dark">
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
          </Navbar>
          {!filterAll && (
            <Navbar bg="light" variant="dark" sticky="top">
              <SearchMany
                fields={fields}
                handleOnOffSearch={this.handleOnOffSearch}
                onChangeSearchMany={this.onChangeSearchMany}
                sortBy={sortColumn.sortBy}
              />
            </Navbar>
          )}
          <Navbar bg="light" variant="dark" sticky="top">
            <Nav className="mr-auto">
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
            </Nav>
          </Navbar>
          <div className="row">
            <div className="col">
              <OnlyTable
                fields={fields}
                data={data}
                sortColumn={sortColumn}
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
                filter={filter}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="text-center">
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
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RssTable;
