import  * as React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { getCarouselData } from './api/api'
import List from './component/List'

// import './App.css';

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getCarouselData().then((result)=>{
      console.log(result)
      setData(result)
    })
  }, []);

  const ListItems = data.map((item, index) => <List key={index} value={item.home_act_title}></List>)
  return (
    <React.Fragment>
      {ListItems}
    </React.Fragment>
  );
}

export default App;
