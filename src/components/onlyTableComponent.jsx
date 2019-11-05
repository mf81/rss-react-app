import React, { Component } from "react";
import Popup from "./common/popupComponent";
import DetailsTable from "./common/tableDetales";
import Items from "./common/items";
import DeleteTable from "./common/deleteTable";
import { Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import EditTable from "./common/editTable";
import color from "./common/colorDetails";

class OnlyTable extends Component {
  riseSort = sort => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.sortBy === sort) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.sortBy = sort;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = sortBy => {
    if (sortBy === this.props.sortColumn.sortBy) {
      if (this.props.sortColumn.order === "asc")
        return <i className="fa fa-sort-asc" style={{ color: "green" }}></i>;
      else
        return <i className="fa fa-sort-desc" style={{ color: "green" }}></i>;
    }
  };

  render() {
    const { data, onDelete, fields, onEdit, filter } = this.props;
    return (
      <React.Fragment>
        <table className="table table-striped">
          <thead>
            <tr>
              <th key="lp">LP.</th>
              <th />
              <th
                onClick={() => this.riseSort("imieNazwisko")}
                style={{ cursor: "pointer" }}
                key="imieNazwisko"
              >
                <p
                  style={
                    "imieNazwisko" === this.props.sortColumn.sortBy
                      ? { color: "green" }
                      : { color: "black" }
                  }
                >
                  {fields.imieNazwisko.firstSite && fields.imieNazwisko.label}{" "}
                  {this.renderSortIcon("imieNazwisko")}
                </p>
              </th>
              <th
                onClick={() => this.riseSort("nr")}
                style={{ cursor: "pointer" }}
                key="nr"
              >
                <p
                  style={
                    "nr" === this.props.sortColumn.sortBy
                      ? { color: "green" }
                      : { color: "black" }
                  }
                >
                  {fields.nr.firstSite && fields.nr.label}{" "}
                  {this.renderSortIcon("nr")}
                </p>
              </th>
              <th
                onClick={() => this.riseSort("rok")}
                style={{ cursor: "pointer" }}
                key="rok"
              >
                <p
                  style={
                    "rok" === this.props.sortColumn.sortBy
                      ? { color: "green" }
                      : { color: "black" }
                  }
                >
                  {fields.rok.firstSite && fields.rok.label}{" "}
                  {this.renderSortIcon("rok")}
                </p>
              </th>
              <th
                onClick={() => this.riseSort("rokDW")}
                style={{ cursor: "pointer" }}
                key="rokDW"
              >
                <p
                  style={
                    "rokDW" === this.props.sortColumn.sortBy
                      ? { color: "green" }
                      : { color: "black" }
                  }
                >
                  {fields.rokDW.firstSite && fields.rokDW.label}{" "}
                  {this.renderSortIcon("rokDW")}
                </p>
              </th>
              <th
                onClick={() => this.riseSort("nrDW")}
                style={{ cursor: "pointer" }}
                key="nrDW"
              >
                <p
                  style={
                    "nrDW" === this.props.sortColumn.sortBy
                      ? { color: "green" }
                      : { color: "black" }
                  }
                >
                  {fields.nrDW.firstSite && fields.nrDW.label}{" "}
                  {this.renderSortIcon("nrDW")}
                </p>
              </th>

              <th
                onClick={() => this.riseSort("kodLokalu")}
                style={{ cursor: "pointer" }}
                key="kodLokalu"
              >
                <p
                  style={
                    "kodLokalu" === this.props.sortColumn.sortBy
                      ? { color: "green" }
                      : { color: "black" }
                  }
                >
                  {fields.kodLokalu.firstSite && fields.kodLokalu.label}{" "}
                  {this.renderSortIcon("kodLokalu")}
                </p>
              </th>

              <th
                onClick={() => this.riseSort("polaczono")}
                style={{ cursor: "pointer" }}
                key="polaczono"
              >
                <p
                  style={
                    "polaczono" === this.props.sortColumn.sortBy
                      ? { color: "green" }
                      : { color: "black" }
                  }
                >
                  {fields.polaczono.firstSite && fields.polaczono.label}{" "}
                  {this.renderSortIcon("polaczono")}
                </p>
              </th>

              <th
                onClick={() => this.riseSort("adres")}
                style={{ cursor: "pointer" }}
                key="adres"
              >
                <p
                  style={
                    "adres" === this.props.sortColumn.sortBy
                      ? { color: "green" }
                      : { color: "black" }
                  }
                >
                  {fields.adres.firstSite && fields.adres.label}{" "}
                  {this.renderSortIcon("adres")}
                </p>
              </th>

              <th
                onClick={() => this.riseSort("wartosc")}
                style={{ cursor: "pointer" }}
                key="wartosc"
              >
                <p
                  style={
                    "wartosc" === this.props.sortColumn.sortBy
                      ? { color: "green" }
                      : { color: "black" }
                  }
                >
                  {fields.wartosc.firstSite && fields.wartosc.label}{" "}
                  {this.renderSortIcon("wartosc")}
                </p>
              </th>

              <th
                onClick={() => this.riseSort("sygnaturaNakaz")}
                style={{ cursor: "pointer" }}
                key="sygnaturaNakaz"
              >
                <p
                  style={
                    "sygnaturaNakaz" === this.props.sortColumn.sortBy
                      ? { color: "green" }
                      : { color: "black" }
                  }
                >
                  {fields.sygnaturaNakaz.firstSite &&
                    fields.sygnaturaNakaz.label}{" "}
                  {this.renderSortIcon("sygnaturaNakaz")}
                </p>
              </th>
              <th />
            </tr>
          </thead>
          <tbody key="tableComponentBody">
            {!data.some(item => {
              return item.notFound;
            }) &&
              data.map((data, i) => (
                <tr key={data._id + "-tr"}>
                  <td key={data._id + "-id"}>{i + 1}</td>
                  <td>
                    <Popup
                      label={<FontAwesomeIcon icon={faUserEdit} />}
                      title="Edytuj wpis"
                      template={
                        <EditTable
                          data={data}
                          fields={fields}
                          onEdit={onEdit}
                        />
                      }
                      size="lg"
                      variant={color(data)}
                      closeButton="Zamknij bez zapisania"
                      extraProps
                      comment="Edytuj wpis..."
                      placement="top"
                    />
                  </td>
                  <td key={data._id + "-imieNazwisko"}>
                    <Popup
                      label={
                        data.imieNazwisko ? data.imieNazwisko : "brak wartości"
                      }
                      title={data.imieNazwisko}
                      template={<DetailsTable data={data} fields={fields} />}
                      closeButton="Zamknij"
                      extraComment="Uwagi"
                      comment={data.uwagi}
                      variant={color(data)}
                    />
                  </td>
                  <td key={data._id + "-nr"}>
                    <Items data={data} item={"nr"} />
                  </td>
                  <td key={data._id + "-rok"}>
                    <Items data={data} item={"rok"} />
                  </td>
                  <td key={data._id + "-rokDW"}>
                    <Items data={data} item={"rokDW"} />
                  </td>
                  <td key={data._id + "-nrDW"}>
                    <Items data={data} item={"nrDW"} />
                  </td>
                  <td key={data._id + "-kodLokalu"}>
                    <Items data={data} item={"kodLokalu"} />
                  </td>
                  <td key={data._id + "-polaczono"}>
                    <Items data={data} item={"polaczono"} />
                  </td>
                  <td key={data._id + "-adres"}>
                    <Items data={data} item={"adres"} />
                  </td>
                  <td key={data._id + "-wartosc"}>
                    <Items data={data} item={"wartosc"} />
                  </td>
                  <td key={data._id + "-sygnaturaNakaz"}>
                    <Items data={data} item={"sygnaturaNakaz"} />
                  </td>
                  <td>
                    <Popup
                      label={<FontAwesomeIcon icon={faTrashAlt} />}
                      title="Kasuj wpis"
                      template={<DeleteTable onClick={() => onDelete(data)} />}
                      size="sm"
                      extraProps
                      comment="Kasuj wpis..."
                      variant="danger"
                      placement="left"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {filter && data[0].notFound && (
          <div className="alert alert-danger m-2">{data[0].notFound}</div>
        )}

        {!data.length && (
          <div className="alert alert-success m-2">
            <Spinner animation="border" size="sm" />
            <span className="m-3">
              Czekaj na załadowanie bazy danych albo sobie gdzieś idź ... :)
            </span>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default OnlyTable;
