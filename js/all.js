const zone = document.querySelector('#zone');
const hot = document.querySelector('#hotZone');
const title = document.querySelector('#title');
const info = document.querySelector('.travel-info');
let data = [];
let xhr = new XMLHttpRequest();
xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97', true);
xhr.send(null);
xhr.onload = function() {
  let response = JSON.parse(xhr.responseText);
  data = response.result.records;   
  dropMenu();
  initial();
}
// 下拉式選單
function dropMenu() {
  let zip = new Set();
  data.forEach((value) => {
    zip.add(value.Zone);
  });
  let Zone = Array.from(zip);
  Zone.forEach((item) => {
    let option = document.createElement('option');
    option.setAttribute('value', item);
    option.textContent = item;
    zone.appendChild(option); 
  });
}
// 過濾資料
function filterData(select) {
  let Data = [];
		// 行政區標題
  title.textContent = select;
  if (select == '全部行政區' || !select) {
    Data = data;
  } else {
    Data = data.filter((value) => {
      return select == value.Zone;
    })
  }
  console.log('filterData', Data);
  renderZone(Data);
}
// 初始畫面
function initial() {
  let select = '三民區';		
  filterData(select);  
}
// 下拉式選單選擇行政區
function selectZone(e){
	 // console.log(e);
  let select = e.target.value;	 
	console.log('選擇行政區', select);
  filterData(select);
}
// 熱門行政區
function hotZone(e){
  e.preventDefault();
  // console.log(e);
  let select = e.target.textContent;
		console.log('熱門行政區', select);
  if (e.target.nodeName !== 'BUTTON') {return}
    filterData(select);    
}
// 渲染畫面
function renderZone(Data) {
	let result = '';  
		Data.forEach((item) => {
      if (item.Ticketinfo) {						
        result +=`<div class="col-md-6 mb-5">
                    <div class="card box-shadow h-100">
                      <div class="bg-cover text-white card-img" style="background-image: url(${item.Picture1}); height: 240px;">
                        <div class="card-img-overlay">
                          <div class="d-flex justify-content-between" style="background-color: rgba(0, 0, 0, .2)">
                            <h4 class="mb-0">${item.Name}</h4>
                            <span>${item.Zone}</span>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                          <img src="https://upload.cc/i1/2019/02/02/WKTgeN.png" weight="18" height="18">
                          <span class="ml-2">${item.Opentime}</span>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                          <img class="pin" src="https://upload.cc/i1/2019/02/02/GWg2ZT.png" weight="16" height="20">
                          <span class="ml-2">${item.Add}</span>
                        </div><div class="d-flex align-items-center">
                          <img class="phone" src="https://upload.cc/i1/2019/02/02/Z8KTuX.png" width="12" height="20">
                          <span class="mr-auto card-text">${item.Tel}</span>
                          <img src="https://upload.cc/i1/2019/02/02/RutpX1.png" width="20" height="20">
                          <span class="ml-2 ticket">${item.Ticketinfo}</span>																										
                        </div>
                      </div>
                    </div>
                  </div>`;
      } else {
        result +=`<div class="col-md-6 mb-5">
                    <div class="card box-shadow h-100">
                      <div class="bg-cover text-white card-img" style="background-image: url(${item.Picture1}); height: 240px;">
                        <div class="card-img-overlay">
                          <div class="d-flex justify-content-between" style="background-color: rgba(0, 0, 0, .1)">
                            <h4 class="mb-0">${item.Name}</h4>
                            <span>${item.Zone}</span>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                          <img src="https://upload.cc/i1/2019/02/02/WKTgeN.png" weight="18" height="18">
                          <span class="ml-2">${item.Opentime}</span>
                        </div>
                          <div class="d-flex align-items-center mb-3">
                            <img class="pin" src="https://upload.cc/i1/2019/02/02/GWg2ZT.png" weight="16" height="20">
                            <span class="ml-2">${item.Add}</span>
                          </div><div class="d-flex align-items-center">
                            <img class="phone" src="https://upload.cc/i1/2019/02/02/Z8KTuX.png" width="12" height="20">
                            <span class="mr-auto card-text">${item.Tel}</span>																										
                          </div>
                        </div>
                      </div>
                    </div>`;
    }
	});		
		info.innerHTML = result;					
}
zone.addEventListener('change', selectZone, false);
hot.addEventListener('click', hotZone, false);