import React from "react";
import _ from "lodash";

const PaginationPrivNext = props => {
  const { onClick, currentPage, count, pageSize, label, maxValue } = props;

  const pagesCount = Math.ceil(count / pageSize);
  const pages = _.range(1, pagesCount + 1);

  const hrefLink = "#";
  let activeSwitch = "page-item";

  if (maxValue) {
    if (currentPage === pages.length) activeSwitch = "page-item disabled";
  } else {
    if (currentPage === 1) activeSwitch = "page-item disabled";
  }

  return (
    <li className={activeSwitch}>
      <a
        className="page-link"
        onClick={() => onClick()}
        style={{ cursor: "pointer" }}
        href={hrefLink}
      >
        {label}
      </a>
    </li>
  );
};

export default PaginationPrivNext;
