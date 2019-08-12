import React from 'react';
import { Container } from 'react-bootstrap';

const Pagination = ({CurrentPage, Pages, handleCurrentPage}) => {
  console.log('分頁數', Pages);
  console.log('現在頁數', CurrentPage);
  
  const isActive = (CurrentPage, i) => {
    console.log('i', i);
    if (CurrentPage === i - 1) return 'active';
  };  
  
  const renderList = [];
  for (let i = 1; i <= Pages; i++) {
    renderList.push(
      <li className={`page-item ${isActive(CurrentPage, i)}`}>
        <button className="page-link"
          onClick={handleCurrentPage.bind(this, i)}>
          {/* onClick={(e) => handleCurrentPage(i, e)}> */}
          { i }
        </button>    
      </li>
    );
  };
  

  return (
    <>
      <Container className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">        
            { renderList }
          </ul>
        </nav>
      </Container>
    </>
  );
}



export default Pagination;
