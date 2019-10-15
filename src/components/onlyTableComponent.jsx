import React, { Component } from "react";
import Popup from "./common/popupComponent";
import DetailsTable from "./common/tableDetales";
import uuid from "uuid/v1";
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
        return <i className="fa fa-sort-asc"></i>;
      else return <i className="fa fa-sort-desc"></i>;
    }
  };

  render() {
    const { data, onDelete, fields, onEdit } = this.props;
    return (
      <table key={uuid()} className="table table-striped">
        <thead key={uuid()}>
          <tr key={uuid()}>
            <th>LP.</th>
            {Object.keys(fields).map(
              (item, i) =>
                fields[item].firstSite && (
                  <th
                    key={uuid()}
                    onClick={() => this.riseSort(item)}
                    style={{ cursor: "pointer" }}
                  >
                    {fields[item].firstSite && fields[item].label}{" "}
                    {this.renderSortIcon(item)}
                  </th>
                )
            )}
            <th />
            <th />
          </tr>
        </thead>
        <tbody key="tableComponentBody">
          {data.map((data, i) => (
            <tr key={uuid()}>
              <td>{i + 1}</td>
              {Object.keys(fields).map(
                item =>
                  fields[item].firstSite && (
                    <td key={uuid()}>
                      <Items
                        data={data}
                        item={item}
                        fields={fields}
                        onEdit={onEdit}
                      />
                    </td>
                  )
              )}
              <td key={uuid()}>
                <Popup
                  label="X"
                  title="Kasuj wpis"
                  template={<DeleteTable onClick={() => onDelete(data)} />}
                  size="sm"
                  btn="btn-danger"
                  extraProps
                />
              </td>
              <td key={uuid()}>
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
    );
  }
}

export default OnlyTable;
