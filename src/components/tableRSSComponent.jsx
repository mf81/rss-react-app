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

class RssTable extends Component {
  ip = {
    localhost: "http://localhost:3000/api/rss/",
    ip: "http://10.0.254.51:3000/api/rss/"
  };
  state = {
    data: [],
    filter: "",
    filterAll: false,
    onFocusSearch: true,
    pageSize: 100,
    currentPage: 1,
    nF: "Błąd",
    sortColumn: { sortBy: "rok", order: "desc" },
    fields: {
      imieNazwisko: { label: "Imie, Nazwisko", firstSite: true },
      nr: { label: "Nr", firstSite: true },
      rok: { label: "Rok", firstSite: true },
      rokDW: { label: "Rok DW", firstSite: true },
      nrDW: { label: "Nr DW", firstSite: true },
      kodLokalu: { label: "Kod lokalu", firstSite: true },
      polaczono: { label: "Połączono", firstSite: true },
      adres: { label: "Adres", firstSite: true },
      wartosc: { label: "Wartość", firstSite: true },
      sygnaturaNakaz: { label: "Sygnatura Nakaz", firstSite: true },
      rodzaj: { label: "Rodzaj ", firstSite: false },
      ADM: { label: "ADM", firstSite: false },
      okresDochodzony: { label: "Okres Dochodzony", firstSite: false },
      wniesieniePozwu: { label: "Wniesienie Pozwu", firstSite: false },
      orzeczenieNakaz: { label: "Orzeczenie Nakaz", firstSite: false },
      sygnaturaSprzeciw: { label: "SygnaturaSprzeciw", firstSite: false },
      orzeczenieSprzeciw: { label: "Orzeczenie Sprzeciw", firstSite: false },
      sygnaturaApelacja: { label: "Sygnatura Apelacja", firstSite: false },
      orzeczenieApelacja: { label: "Orzeczenie Apelacja", firstSite: false },
      wystapienieOklauzule: {
        label: "Wystapienie Oklauzule",
        firstSite: false
      },
      wniosekMajatku: { label: "Wniosek Majatku:", firstSite: false },
      sygnAktWyjawienia: {
        label: "Sygnatura Akt Wyjawienia",
        firstSite: false
      },
      orzeczenieWyjawienia: {
        label: "Orzeczenie Wyjawienia",
        firstSite: false
      },
      etapPostEgz: {
        label: "Etap Postępowania Egzekującego",
        firstSite: false
      },
      uwagi: { label: "Uwagi:", firstSite: false },
      przekazanoDoDP: { label: "Przekazano do DP", firstSite: false },
      rozliczoneZastepstwa: {
        label: "Rozliczone Zastępstwa",
        firstSite: false
      },
      radcaPrawny: { label: "Radca Prawny", firstSite: false }
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

  handleChange = e => this.setState({ currentPage: 1, filter: e.target.value });
  onFocusSearch = () => this.setState({ onFocusSearch: false });

  searchName = searchBy => {
    if (this.state.onFocusSearch) {
      let text;
      if (this.state.filterAll) {
        text = "Przeszukujesz baze po wszystkich polach";
      } else {
        text =
          "Przeszukujesz baze po polu: " + this.state.fields[searchBy].label;
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

  render() {
    const filteredData = this.filterSearch(
      this.state.filter,
      this.state.data,
      this.state.sortColumn.sortBy,
      this.state.filterAll
    );

    const { length: count } = filteredData;

    const sorted = _.orderBy(
      filteredData,
      [this.state.sortColumn.sortBy],
      [this.state.sortColumn.order]
    );

    const data = paginate(sorted, this.state.currentPage, this.state.pageSize);

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
                  fields={this.state.fields}
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
              value={this.state.filter}
              onChange={this.handleChange}
              placeholder={this.searchName(this.state.sortColumn.sortBy)}
              handleAll={this.handleAllSearch}
              filterAll={this.state.filterAll}
              onFocus={this.onFocusSearch}
              notFound={this.state.notFound}
              sortBy={this.state.sortColumn.sortBy}
              fields={this.state.fields}
            />
          </Navbar>

          <Navbar bg="light" variant="dark" sticky="top"></Navbar>
          <Navbar bg="light" variant="dark" sticky="top">
            <Nav className="mr-auto">
              <Pagination
                itemsCount={count}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
                onPriv={this.handlePriv}
                onNext={this.handelNext}
                currentPage={this.state.currentPage}
                onPageSize={this.handlePageSize}
                onFocus={this.onFocusSearch}
              />
            </Nav>
          </Navbar>
          <div className="row">
            <div className="col">
              <OnlyTable
                fields={this.state.fields}
                data={data}
                sortColumn={this.state.sortColumn}
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
                filter={this.state.filter}
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
                      pageSize={this.state.pageSize}
                      onClick={() => this.handlePriv()}
                      currentPage={this.state.currentPage}
                      label="Poprzednia"
                    />
                    <PrivNext
                      count={count}
                      pageSize={this.state.pageSize}
                      onClick={() => this.handelNext()}
                      currentPage={this.state.currentPage}
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
