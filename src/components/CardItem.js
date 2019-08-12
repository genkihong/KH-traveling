import React from 'react';
import { Card, Col } from 'react-bootstrap';



const CardItem = ({Name, Zone, Opentime, Add, Tel, Ticketinfo, Picture}) => {
  // 先宣告 ticketinfo 函式
  // const ticketinfo = (Ticketinfo) => {
  //   let info = '';
  //   Ticketinfo ? info = 'd-block' : info = 'd-none';
  //   return info;
  // };

  // 再執行 ticketinfo()
  // const isInfo = ticketinfo(Ticketinfo);

  // const isInfo = (Ticketinfo) => {
  //   let info = '';
  //   Ticketinfo ? info = 'd-block' : info = 'd-none';
  //   return info;
  // };

  const getStyle = () => {
    return {
      display: Ticketinfo ? 'block' : 'none'
    }
  };
  
  return (
    <>
      <Col md={6} className="mb-5">
        <Card className="box-shadow h-100">
          <div className="bg-cover text-white" style={{height: '200px', backgroundImage: `url(${Picture})`}}>
            <Card.ImgOverlay>
              <div className="d-flex justify-content-between" style={{backgroundColor: 'rgba(0, 0, 0, .1)'}}>
                <h4 className="mb-0">{Name}</h4>
                <span>{Zone}</span>
              </div>
            </Card.ImgOverlay>
          </div>    
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <img src="https://upload.cc/i1/2019/02/02/WKTgeN.png" weight="18" height="18" alt={Name} />
              <span className="ml-2">{Opentime}</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img className="pin" src="https://upload.cc/i1/2019/02/02/GWg2ZT.png" weight="16" height="20" alt={Name} />
              <span className="ml-2">{Add}</span>
            </div>
            <div className="d-flex align-items-center">
              <img className="phone" src="https://upload.cc/i1/2019/02/02/Z8KTuX.png" width="12" height="20" alt={Name} />
              <span className="mr-auto card-text">{Tel}</span>
              {/* <div className={isInfo(Ticketinfo)}> */}
              {/* <div className={isInfo}> */}
              <div style={getStyle()}>
                <img src="https://upload.cc/i1/2019/02/02/RutpX1.png" width="20" height="20" alt={Name} />
                <span className="ml-2">{Ticketinfo}</span>
              </div>               
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>    
  );
}
// const isInfo = (Ticketinfo) => {
//   let info = '';
//   Ticketinfo ? info = 'd-block' : info = 'd-none';
//   return info;
// };
// 在這裡也可以宣告 ticketinfo()
// const ticketinfo = (Ticketinfo) => {
//   let info = '';
//   Ticketinfo ? info = 'd-block' : info = 'd-none';
//   return info;
// };

export default CardItem;
