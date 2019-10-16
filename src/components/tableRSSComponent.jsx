import React, { Component } from "react";
import _ from "lodash";
import Pagination from "./common/pagination";
import PrivNext from "./common/paginationPrivNext";
import { paginate } from "./common/paginate";
import OnlyTable from "./onlyTableComponent";
import Popup from "./common/popupComponent";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import axios from "axios";
import AddTooDb from "./common/addTooDbTable";

class RssTable extends Component {
  ip = {
    localhost: "http://localhost:3000/api/rss/",
    ip: "http://10.0.254.51:3000/api/rss/"
  };
  state = {
    data: [],
    pageSize: 100,
    currentPage: 1,
    sortColumn: { sortBy: "rok", order: "desc" },
    fields: {
      imieNazwisko: { label: "Imie, Nazwisko:", firstSite: true },
      nr: { label: "Nr:", firstSite: true },
      rok: { label: "Rok:", firstSite: true },
      rokDW: { label: "Rok DW:", firstSite: true },
      nrDW: { label: "Nr DW:", firstSite: true },
      kodLokalu: { label: "Kod lokalu:", firstSite: true },
      polaczono: { label: "Połączono:", firstSite: true },
      adres: { label: "Adres:", firstSite: true },
      wartosc: { label: "Wartość:", firstSite: true },
      sygnaturaNakaz: { label: "Sygnatura Nakaz:", firstSite: true },
      rodzaj: { label: "Rodzaj: ", firstSite: false },
      ADM: { label: "ADM:", firstSite: false },
      okresDochodzony: { label: "Okres Dochodzony:", firstSite: false },
      wniesieniePozwu: { label: "Wniesienie Pozwu:", firstSite: false },
      orzeczenieNakaz: { label: "Orzeczenie Nakaz:", firstSite: false },
      sygnaturaSprzeciw: { label: "SygnaturaSprzeciw:", firstSite: false },
      orzeczenieSprzeciw: { label: "Orzeczenie Sprzeciw:", firstSite: false },
      sygnaturaApelacja: { label: "Sygnatura Apelacja:", firstSite: false },
      orzeczenieApelacja: { label: "Orzeczenie Apelacja", firstSite: false },
      wystapienieOklauzule: {
        label: "Wystapienie Oklauzule:",
        firstSite: false
      },
      wniosekMajatku: { label: "Wniosek Majatku:", firstSite: false },
      sygnAktWyjawienia: {
        label: "Sygnatura Akt Wyjawienia:",
        firstSite: false
      },
      orzeczenieWyjawienia: {
        label: "Orzeczenie Wyjawienia:",
        firstSite: false
      },
      etapPostEgz: {
        label: "Etap Postępowania Egzekującego:",
        firstSite: false
      },
      uwagi: { label: "Uwagi:", firstSite: false },
      przekazanoDoDP: { label: "Przekazano do DP:", firstSite: false },
      rozliczoneZastepstwa: {
        label: "Rozliczone Zastępstwa:",
        firstSite: false
      },
      radcaPrawny: { label: "Radca Prawny: ", firstSite: false }
    }
  };
  async componentDidMount() {
    const { data } = await axios.get(this.ip.localhost);
    this.setState({ data });
  }

  handleDelete = dataNew => {
    const data = this.state.data.filter(f => f._id !== dataNew._id);
    this.setState({ data });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
    console.log(page);
  };

  handlePriv = () => {
    const statePriv = this.state.currentPage - 1;
    this.setState({ currentPage: statePriv });
  };

  handelNext = () => {
    const stateNext = this.state.currentPage + 1;
    this.setState({ currentPage: stateNext });
  };

  handlePageSize = size => {
    this.setState({ currentPage: 1, pageSize: size });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

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

  render() {
    const { length: count } = this.state.data;
    if (count === 0) {
      return <p>Ładuje...</p>;
    }
    const pagesCount = Math.ceil(count / this.state.pageSize);
    const pages = _.range(1, pagesCount + 1);

    // const filtred =
    //   this.state.selectedGenres && this.state.selectedGenres._id !== "0"
    //     ? this.state.data.filter(
    //         f => f.genres._id === this.state.selectedGenres._id
    //       )
    //     : this.state.data;

    const sorted = _.orderBy(
      this.state.data,
      [this.state.sortColumn.sortBy],
      [this.state.sortColumn.order]
    );

    const data = paginate(sorted, this.state.currentPage, this.state.pageSize);

    return (
      <React.Fragment>
        <div className="container-fluid p-0">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Rejestr Spraw Sądowych</Navbar.Brand>
          </Navbar>
          <Navbar bg="light" variant="dark" sticky="top">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Wpisz szukaną frazę"
                className="mr-sm-2"
              />
              <Button variant="outline-dark">Szukaj</Button>
            </Form>
            <Popup
              label="Dodaj..."
              title="Dodaj wpis do bazy"
              template={
                <AddTooDb
                  fields={this.state.fields}
                  doSubmit={this.handleAdd}
                  onClick={() => this.handleAdd()}
                  data={this.state.data}
                  extraProps
                />
              }
              size="lg"
              variant="primary"
              extraProps
            />
            <Nav className="mr-auto">
              <Pagination
                itemsCount={count}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
                onPriv={this.handlePriv}
                onNext={this.handelNext}
                currentPage={this.state.currentPage}
                onPageSize={this.handlePageSize}
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
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="text-center">
                <nav aria-label="Page navigation mx-auto">
                  <ul className="pagination pagination-lg ">
                    <PrivNext
                      onClick={() => this.handlePriv()}
                      currentPage={this.state.currentPage}
                      pages={pages}
                      label="Poprzednia"
                    />
                    <PrivNext
                      onClick={() => this.handelNext()}
                      currentPage={this.state.currentPage}
                      pages={pages}
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
