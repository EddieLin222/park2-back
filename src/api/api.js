import axios from 'axios';

const reqObj = axios.create({
  // baseURL 設定的是自己測試的 IP位址:server埠號 (ex. http://192.168.0.112:3000)
  baseURL: 'http://10.0.102.59:3001',
  header: {
    'Content-Type': 'application/json'
  }
})
  
// 建立 promise函式
function handleReq(e) {
  return new Promise((resolve, reject) => {
    e
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}
  
// 建立 對應api的function
export function getCarouselData(id) {
  return handleReq(reqObj.get('/admin/home/activity/get', {
    params: {
      id
    }
  }))
}