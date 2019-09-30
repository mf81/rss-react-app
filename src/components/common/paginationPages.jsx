import React from "react";
import _ from "lodash";
import PrivNext from "./paginationPrivNext";

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
          <PrivNext
            onClick={() => onPriv()}
            currentPage={currentPage}
            pages={pages}
            label="Poprzednia"
          />
          <PrivNext
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
