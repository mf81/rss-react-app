import React from "react";

const PaginationPrivNext = props => {
  const { onClick, currentPage, pages, label, maxValue } = props;
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
