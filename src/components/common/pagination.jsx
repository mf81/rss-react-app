import React from "react";
import PropTypes from "prop-types";
import Pages from "./paginationPages";
import PageSize from "./paginationPageSize";
import { Container, Row, Col } from "react-bootstrap";

const Pagination = props => {
  const {
    itemsCount,
    pageSize,
    onPageChange,
    currentPage,
    onPriv,
    onNext,
    onPageSize
  } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount !== 1) {
    return (
      <Container fluid>
        <Row>
          <Col xs={6} md={6}>
            <Pages
              itemsCount={itemsCount}
              pageSize={pageSize}
              onPageChange={onPageChange}
              onPriv={onPriv}
              onNext={onNext}
              currentPage={currentPage}
              onPageSize={onPageSize}
              pagesCount={pagesCount}
            />
          </Col>
          <Col xs={6} md={6}>
            <PageSize pageSize={pageSize} onPageSize={onPageSize} />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <div className="container">
        <PageSize pageSize={pageSize} onPageSize={onPageSize} />
      </div>
    );
  }
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPriv: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPageSize: PropTypes.func.isRequired
};

export default Pagination;
