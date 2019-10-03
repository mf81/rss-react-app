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
  state = {
    data: [],
    pageSize: 100,
    currentPage: 1,
    sortColumn: { sortBy: "rok", order: "desc" },
    fieldsDB: {
      nr: "Nr:",
      kodLokalu: "Kod lokalu:",
      rok: "Rok:",
      nrDW: "Nr DW:",
      rokDW: "Rok DW:",
      polaczono: "Połączono:",
      rodzaj: "Rodzaj: ",
      imieNazwisko: "Imie, Nazwisko:",
      adres: "Adres:",
      ADM: "ADM:",
      wartosc: "Wartość:",
      okresDochodzony: "Okres Dochodzony:",
      wniesieniePozwu: "Wniesienie Pozwu:",
      sygnaturaNakaz: "Sygnatura Nakaz:",
      orzeczenieNakaz: "Orzeczenie Nakaz:",
      sygnaturaSprzeciw: "SygnaturaSprzeciw:",
      orzeczenieSprzeciw: "Orzeczenie Sprzeciw:",
      sygnaturaApelacja: "Sygnatura Apelacja:",
      orzeczenieApelacja: "Orzeczenie Apelacja",
      wystapienieOklauzul: "Wystapienie Oklauzule:",
      wniosekMajatku: "Wniosek Majatku:",
      sygnAktWyjawienia: "Sygnatura Akt Wyjawienia:",
      orzeczenieWyjawienia: "Orzeczenie Wyjawienia:",
      etapPostEgz: "Etap Postępowania Egzekującego:",
      uwagi: "Uwagi:",
      przekazanoDoDP: "Przekazano do DP:",
      radcaPrawny: "Radca Prawny: ",
      rozliczoneZastepstwa: "Rozliczone Zastępstwa:"
    },
    fieldsFirstSide: {
      imieNazwisko: "Imie, Nazwisko:",
      nr: "Nr:",
      rok: "Rok:",
      nrDW: "Nr DW:",
      rokDW: "Rok DW:",
      kodLokalu: "Kod lokalu:",
      polaczono: "Połączono:",
      adres: "Adres:",
      wartosc: "Wartość:",
      sygnaturaNakaz: "Sygnatura Nakaz:"
    }
  };
  async componentDidMount() {
    const { data } = await axios.get("http://10.0.254.51:3000/api/rss");
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

  handleEdit = data => {
    console.log("OK edit");
    console.log("Data:", data);
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
              template={<AddTooDb fieldsDB={this.state.fieldsDB} />}
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
                fieldsDB={this.state.fieldsDB}
                fieldsFirstSide={this.state.fieldsFirstSide}
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
