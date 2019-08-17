import React from 'react';
import { Container, Row, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import CardItem from './CardItem';

const Paginations = ({selectData, currentZone, currentPage, perPage, handleClickPage}) => {
  // 分頁計算
  // 第1頁: 0~5，第2頁: 6~11
  let minItem = (currentPage * perPage) - perPage;
  let maxItem = currentPage * perPage;
  // console.log('分頁範圍', minItem, maxItem);
  
  let totalPage = Math.ceil(selectData.length / perPage);

  let currentData = selectData.slice(minItem, maxItem);
  // console.log('分頁資料', currentData);

  // let prev = currentPage > 1 ? (currentPage - 1) : 0;
  // console.log('上一頁', prev);

  // let next = (totalPage === currentPage) ? currentPage : currentPage + 1;
  // console.log('下一頁', next);

  let pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  // const renderPagination = pageNumbers.map((number) => {
  //   return (
  //     <PaginationItem key={number} active={currentPage === number }>
  //       <PaginationLink id={number} onClick={this.handleClickPage}>
  //         { number }
  //       </PaginationLink>
  //     </PaginationItem>
  //   );
  // // });
  console.log('總共有:', totalPage, '頁');
  console.log('第', currentPage, '頁');

  return (
    <>
    <Container>
      <div className="line">
        <div className="icon"></div>
      </div>
      <h2 className="text-center my-5">{currentZone}</h2>
      <Row className="travel-info">
        {
          currentData.map((item) => {
            return (
              <CardItem
                key={item.Id}
                Name={item.Name}
                Zone={item.Zone}
                Opentime={item.Opentime}
                Add={item.Add}
                Tel={item.Tel}
                Ticketinfo={item.Ticketinfo}
                Picture={item.Picture1}
              />
            );
          })
        }         
      </Row>    
    </Container>
    <Container className="d-flex justify-content-center">
      <Pagination>
        {/* <PaginationItem>
        { prev === 0 ? <PaginationLink previous disabled /> :
          <PaginationLink previous id={prev} href={prev} onClick={this.handleClickPage} />
        }
        </PaginationItem> */}

          {/* { renderPagination } */}
          {
            pageNumbers.map((number) => {
              return (
                <PaginationItem key={number} active={currentPage === number }>
                  <PaginationLink id={number} onClick={handleClickPage}>
                    { number }
                  </PaginationLink>
                </PaginationItem>
              );
            })
          }

        {/* <PaginationItem>
        { currentPage === totalPage ? <PaginationLink next disabled />:
          <PaginationLink next id={next} href={next} onClick={this.handleClickPage} />
        }
        </PaginationItem> */}
      </Pagination>
    </Container>
    </>
  );
}

export default Paginations;
