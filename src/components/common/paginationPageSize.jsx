import React from "react";
const PageSize = props => {
  const hrefLink = "#";
  const { pageSize, onPageSize } = props;
  const pageSizeNew = [10, 25, 50, 100, 150, 200, 300];
  return (
    <div className="row justify-content-md-center">
      <nav aria-label="Page navigation 2">
        <ul className="pagination pagination-sm m-2">
          {pageSizeNew.map(p => (
            <li
              className={pageSize === p ? "page-item active" : "page-item"}
              key={p}
            >
              <a
                className="page-link"
                style={{ cursor: "pointer" }}
                onClick={() => onPageSize(p)}
                href={hrefLink}
              >
                {p}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PageSize;
