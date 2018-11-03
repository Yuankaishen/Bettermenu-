import React, { Component } from 'react';
import './App.css';
import td from './testdata.json';
import FoodItem from './components/food_item';

class App extends Component {
   render() {
      let dataMap = []
      for (let i = 0; i < td.info.length; i++) {
         dataMap.push(td.info[i]);
      }

      return (
         <div>
            {
               dataMap.map((item, key) => (
                  <FoodItem item={item} ind={key} key={key} />
               ))
            }
         </div>
      );
   }
}

export default App;
