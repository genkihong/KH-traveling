import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

const HotZone = ({handleClick}) => {
  // const handleClick = props.handleClick;
  return (
    <> 
      <Container>
        <Row className="justify-content-center">
          <Col md="10">
            <div className="sub-menu box-shadow">
              <p className="text-left">熱門行政區</p>
              <div id="hotZone" className="d-md-flex justify-content-around text-center">
                <Button
                  color="light"
                  size="lg"
                  className="btn-first text-white mb-3 mb-md-0"
                  onClick={handleClick.bind(this, '三民區')}>三民區
                </Button>
                <Button
                  color="light"
                  size="lg" 
                  className="btn-second text-white mb-3 mb-md-0"
                  onClick={handleClick.bind(this, '苓雅區')}>苓雅區
                </Button>
                <Button
                  color="light"
                  size="lg"
                  className="btn-third text-white"
                  onClick={(e) => handleClick('新興區', e)}>新興區
                </Button>
                <Button
                  color="light"
                  size="lg"
                  className="btn-fourth text-white"
                  onClick={(e) => handleClick('左營區', e)}>左營區
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HotZone;