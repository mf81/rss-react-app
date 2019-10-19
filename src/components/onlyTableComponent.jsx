import React, { Component } from "react";
import Popup from "./common/popupComponent";
import DetailsTable from "./common/tableDetales";
import Items from "./common/items";
import DeleteTable from "./common/deleteTable";

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
              <th />
            </tr>
          </thead>
          <tbody key="tableComponentBody">
            {!filter &&
              data.map((data, i) => (
                <tr key={data._id + "-tr"}>
                  <td key={data._id + "-id"}>{i + 1}</td>
                  <td key={data._id + "-imieNazwisko"}>
                    <Items
                      data={data}
                      item={"imieNazwisko"}
                      fields={fields}
                      onEdit={onEdit}
                      key={data._id}
                    />
                  </td>
                  <td key={data._id + "-nr"}>
                    <Items
                      data={data}
                      item={"nr"}
                      fields={fields}
                      onEdit={onEdit}
                    />
                  </td>
                  <td key={data._id + "-rok"}>
                    <Items
                      data={data}
                      item={"rok"}
                      fields={fields}
                      onEdit={onEdit}
                    />
                  </td>
                  <td key={data._id + "-rokDW"}>
                    <Items
                      data={data}
                      item={"rokDW"}
                      fields={fields}
                      onEdit={onEdit}
                    />
                  </td>
                  <td key={data._id + "-nrDW"}>
                    <Items
                      data={data}
                      item={"nrDW"}
                      fields={fields}
                      onEdit={onEdit}
                    />
                  </td>
                  <td key={data._id + "-kodLokalu"}>
                    <Items
                      data={data}
                      item={"kodLokalu"}
                      fields={fields}
                      onEdit={onEdit}
                    />
                  </td>
                  <td key={data._id + "-polaczono"}>
                    <Items
                      data={data}
                      item={"polaczono"}
                      fields={fields}
                      onEdit={onEdit}
                    />
                  </td>
                  <td key={data._id + "-adres"}>
                    <Items
                      data={data}
                      item={"adres"}
                      fields={fields}
                      onEdit={onEdit}
                    />
                  </td>
                  <td key={data._id + "-wartosc"}>
                    <Items
                      data={data}
                      item={"wartosc"}
                      fields={fields}
                      onEdit={onEdit}
                    />
                  </td>
                  <td key={data._id + "-sygnaturaNakaz"}>
                    <Items
                      data={data}
                      item={"sygnaturaNakaz"}
                      fields={fields}
                      onEdit={onEdit}
                    />
                  </td>

                  <td>
                    <Popup
                      label="X"
                      title="Kasuj wpis"
                      template={<DeleteTable onClick={() => onDelete(data)} />}
                      size="sm"
                      btn="btn-danger"
                      extraProps
                    />
                  </td>
                  <td>
                    <Popup
                      label="..."
                      title={data.imieNazwisko}
                      template={<DetailsTable data={data} fields={fields} />}
                      variant="primary"
                      closeButton="Zamknij"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {filter ? (
          <div className="alert alert-danger m-2">{data[0].notFound}</div>
        ) : (
          <div className="alert alert-success m-2">
            Czekaj na załadowanie bazy danych albo sobie gdzieś idź ... :)
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default OnlyTable;
