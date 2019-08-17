import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import HotZone from './components/HotZone';
import Paginations from './components/Paginations';
import Footer from './components/Footer';
// import CardList from './components/CardList';
import './App.css';

class App extends React.Component {
  state = {
    data: [],        // All行政區資料
    selectData: [],  // 過濾後資料
    currentZone: '', // 下拉式選單選項
    dropMenu: [],    // 下拉式選單
    currentPage: 1,
    perPage: 6
  };
  
  componentDidMount() {
    this.getData();
  }
  
  getData = async () => {
    const url = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
    const response = await axios.get(url);
    // console.log(response.data.result.records);

    this.setState({
      data: response.data.result.records
    });
    this.UniZone();
    this.FilterData('全部行政區');
  }
  // 下拉式選單
  UniZone = () => {
    const zip = this.state.data.map((value) => {
      return value.Zone;
    });
    const Zone = zip.filter((value, index, array) => {
      return array.indexOf(value) === index;    
    });
    this.setState({dropMenu: Zone});
  }
  // 選擇行政區
  handleChange = (select) => {
    // console.log('handleChange', select);
    this.FilterData(select);
  }
  // 熱門行政區
  handleClick = (select, e) => {
    // console.log('handleClick', select);
    e.preventDefault();
    this.FilterData(select);
  }
  // 切換分頁
  handleClickPage = (event) => {
    event.preventDefault();
    // console.log('id', event.target.id);
    this.setState({
      currentPage: Number(event.target.id)
    });
  }  
  // 過濾資料
  FilterData = (select) => {
    let newData = [];
      // 過濾行政區
    if (select === '全部行政區' || !select) {
      newData = this.state.data;
    } else {
      newData = this.state.data.filter((item) => {
          return select === item.Zone;
      });
    }
    // console.log('行政區', newData);
    this.setState({
      selectData: newData,
      currentZone: select,
      currentPage: 1
    });  
  }
  
  render() {  
    return (
      <>
        <Header
          dropMenu={this.state.dropMenu}
          handleChange={this.handleChange}
        />
        <HotZone
          handleClick={this.handleClick}
        />
        {/* <CardList 
          selectData={this.state.selectData}
          currentZone={this.state.currentZone}
        />     */}
        <Paginations
          selectData={this.state.selectData}
          currentZone={this.state.currentZone}
          currentPage={this.state.currentPage}
          perPage={this.state.perPage}
          handleClickPage={this.handleClickPage}
        />
        <Footer />
      </>
    );
  }
}

export default App;
