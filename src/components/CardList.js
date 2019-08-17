import React from 'react';
import { Container, Row } from 'reactstrap';
import CardItem from './CardItem';

const CardList = ({ filterData, currentZone }) => {
  console.log('從 App 傳來的資料', filterData);
/*  const renderCardList = FilterData.map((item) => {
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
  });*/
  return (
    <>
    <Container>
      <div className="line">
        <div className="icon"></div>
      </div>
      <h2 className="text-center my-5">{currentZone}</h2>
      <Row className="travel-info">
        {/* {renderCardList} */}
        {
          filterData.map((item) => {
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
    </>
  );
}

export default CardList;