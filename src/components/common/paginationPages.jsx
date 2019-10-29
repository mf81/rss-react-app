import React from "react";
import _ from "lodash";
import PrivNext from "./paginationPrivNext";

import { Dropdown } from "react-bootstrap";

const Pages = props => {
  const {
    onPageChange,
    currentPage,
    onPriv,
    onNext,
    pagesCount,
    itemsCount,
    pageSize
  } = props;
  const hrefLink = "#";
  const pages = _.range(1, pagesCount + 1);

  return (
    <div className="row justify-content-md-center">
      {/* <nav aria-label="Page navigation">
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
      </nav> */}

      <nav aria-label="Page navigation">
        <ul className="pagination pagination-sm flex-wrap">
          <PrivNext
            count={itemsCount}
            pageSize={pageSize}
            onClick={() => onPriv()}
            currentPage={currentPage}
            pages={pages}
            label="Poprzednia"
          />
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              className=" m-2 btn-sm"
            >
              {pagesCount === 0
                ? "Wczytuje strony... "
                : "Strona: " + currentPage + " z " + pagesCount}
            </Dropdown.Toggle>
            <Dropdown.Menu className="force-scroll">
              {pages.map(page => {
                return (
                  <Dropdown.Item
                    key={page}
                    onClick={() => onPageChange(page)}
                    style={{ cursor: "pointer" }}
                    href={hrefLink}
                    active={page === currentPage ? true : false}
                  >
                    {page}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <PrivNext
            count={itemsCount}
            pageSize={pageSize}
            onClick={() => onNext()}
            currentPage={currentPage}
            pages={pages}
            label="Następna"
            maxValue
          />
        </ul>
      </nav>
    </div>
  );
};

export default Pages;
