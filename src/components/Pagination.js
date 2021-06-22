import React from 'react';
import '../App.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <h3 className="page-title">Latest News..</h3>
      <div className="page-dots">
        {pageNumbers.map((number) => (
          <div
            key={number}
            className={[
              'page-dot',
              currentPage === number ? 'active' : '',
            ].join(' ')}
            onClick={() => paginate(number)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
