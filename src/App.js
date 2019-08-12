import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import HotZone from './components/HotZone';
import CardList from './components/CardList';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

import './App.css';

class App extends React.Component {
  state = {
    data: [],        // All行政區資料
    filterData: [],  // 過濾後資料
    currentZone: '', // 下拉式選單選項
    dropMenu: [],    // 下拉式選單
    pages: 0,
    currentPage: 0
  };
  
  componentDidMount() {
    this.getData();
  };
  
  getData = async () => {
    const url = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
    const response = await axios.get(url);
    // console.log(response.data.result.records);

    this.setState({
      data: response.data.result.records
    });
    this.UniZone();
    this.FilterData('全部行政區');
  };

  // 取得所有行政區
  UniZone = () => {
    const zip = this.state.data.map((value) => {
      return value.Zone;
    });
    const Zone = zip.filter((value, index, array) => {
      return array.indexOf(value) === index;    
    });
    this.setState({dropMenu: Zone});
  };
  // 選擇行政區
  handleChange = (select) => {
    console.log('handleChange', select);
    this.setState({
      currentZone: select,
    });
    this.FilterData(select);
  };
  // 熱門行政區
  handleClick = (select, e) => {
    console.log('handleClick', select);
    e.preventDefault();
    this.FilterData(select);
  };
  // 點擊分頁
  handleCurrentPage = (i, e) => {
    e.preventDefault();
    console.log('現在是#', i);
    this.setState(
      (state) => {
        return {
          currentPage: i - 1,
          // filterData: state.filterData[state.currentPage]
        };  
      }
    );
  };
  // 過濾資料
  FilterData = (select, page) => {
    // console.log('FilterData', select);
    let newData = [];
      // 過濾行政區
    if (select === '全部行政區' || !select) {
      newData = this.state.data;
    } else {
      newData = this.state.data.filter((item) => {
          return select === item.Zone;
      });            
    }
    // this.setState({
    //   filterData: newData
    // });
    // console.log(newData);

    // 分頁
    //pagination = [[], [], [], ...]
    const pagination = [];
    newData.forEach((value, i) => {
      if(i % 6 === 0) { // 每 6 筆資料就增加一個空分頁
        pagination.push([]); 
      }
      const page = parseInt(i / 6); // 每一分頁內有 6 筆資料
      pagination[page].push(value);
    });
    console.log('總共幾頁', pagination);
    this.setState({
      filterData: pagination[0],
      pages: pagination.length, // 分頁數量
      currentZone: select
    });
  };

  render() {
    return (
      <div>
        <Header
          dropMenu={this.state.dropMenu}
          handleChange={this.handleChange}
        />
        <HotZone
          handleClick={this.handleClick}
        />
        <CardList
          FilterData={this.state.filterData}
          CurrentZone={this.state.currentZone}
        />
        <Pagination
          CurrentPage={this.state.currentPage}
          Pages={this.state.pages}
          handleCurrentPage={this.handleCurrentPage}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
