import React from "react";
import _ from "lodash";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Pages = props => {
  const { onPageChange, currentPage, onPriv, onNext, pagesCount } = props;
  const hrefLink = "#";
  const pages = _.range(1, pagesCount + 1);

  return (
    <div className="row justify-content-md-center">
      <nav aria-label="Page navigation">
        <ul className="pagination pagination-sm flex-wrap">
          {pages.map(page => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a
                className="page-link"
                key={page}
                onClick={() => onPageChange(page)}
                style={{ cursor: "pointer" }}
                href={hrefLink}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Page navigation">
        <ul className="pagination pagination-sm flex-wrap">
          <li
            className={currentPage === 1 ? "page-item disabled" : "page-item"}
          >
            <a
              className="page-link "
              onClick={() => onPriv()}
              style={{ cursor: "pointer" }}
              href={hrefLink}
            >
              Poprzednia
            </a>
          </li>
          <li
            className={
              currentPage === pages.length ? "page-item disabled" : "page-item"
            }
          >
            <a
              className="page-link"
              onClick={() => onNext()}
              style={{ cursor: "pointer" }}
              href={hrefLink}
            >
              Następna
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pages;
