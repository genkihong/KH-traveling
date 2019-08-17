import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Options from './Options';

class Header extends React.Component {
  constructor (props) {
    super(props);

    this.selectRef = React.createRef();// 建立Refs
  }
  
  // onSelectChange = () => {
  //   const value = this.selectRef.current.value; 
  //   console.log('選擇行政區', value);
  //   this.props.handleChange(value);
  // }

  render () {
    const { dropMenu, handleChange } = this.props;
    // const dropMenu = this.props.dropMenu;
    return (
      <React.Fragment>
        <Jumbotron fluid className="jumbotron-bg bg-cover mb-0">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <h1 className="text-light text-center">高雄旅遊資訊</h1>
                <select className="form-control"
                  id="zone"
                  defaultValue="選擇行政區"
                  ref={this.selectRef} // 用 ref 成為非受控元件
                  // onChange={this.onSelectChange}
                  onChange={() => handleChange(this.selectRef.current.value)}
                >
                  <option value="選擇行政區" disabled>--- 請選擇行政區 ---</option>
                  <option value="全部行政區">全部行政區</option>
                  <Options dropMenu={dropMenu} />
                </select>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
