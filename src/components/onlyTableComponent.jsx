import React, { Component } from "react";
import Popup from "./common/popupComponent";
import TablePopup from "./common/tablePopup";
import uuid from "uuid/v1";

class OnlyTable extends Component {
  fieldsFirstSide = {
    nr: "Nr:",
    imieNazwisko: "Imie, Nazwisko:",
    rok: "Rok:",
    kodLokalu: "Kod lokalu:",
    nrDW: "Nr DW:",
    rokDW: "Rok DW:",
    polaczono: "Połączono:",
    adres: "Adres:",
    wartosc: "Wartość:",
    sygnaturaNakaz: "Sygnatura Nakaz:"
  };

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
        return <i className="fa fa-sort-asc"></i>;
      else return <i className="fa fa-sort-desc"></i>;
    }
  };

  render() {
    const { data, onDelete, fieldsDB } = this.props;

    return (
      <table key={uuid()} className="table">
        <thead key={uuid()}>
          <tr key={uuid()}>
            {Object.keys(this.fieldsFirstSide).map((item, i) => (
              <th key={uuid()} onClick={() => this.riseSort(item)}>
                {this.fieldsFirstSide[item]} {this.renderSortIcon(item)}
              </th>
            ))}
            <th />
            <th />
          </tr>
        </thead>
        <tbody key="tableComponentBody">
          {data.map(data => (
            <tr key={uuid()}>
              {Object.keys(this.fieldsFirstSide).map((item, i) => (
                <td key={uuid()}>{data[item]}</td>
              ))}

              <td key={uuid()}>
                <button
                  onClick={() => onDelete(data)}
                  className="btn btn-danger btn-sm"
                >
                  Kasuj
                </button>
              </td>
              <td key={uuid()}>
                <Popup
                  name={data.imieNazwisko}
                  template={<TablePopup data={data} fields={fieldsDB} />}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default OnlyTable;
