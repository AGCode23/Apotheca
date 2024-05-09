import React, { useState, useEffect } from "react";

const Pagination = ({ itemsPerPage, totalItems, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? "active" : ""}>
          <button onClick={() => goToPage(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <ul className="page-numbers">{renderPageNumbers()}</ul>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
