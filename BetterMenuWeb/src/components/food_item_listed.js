import React, { Component } from 'react';

//CSS
import '../css/food_item.css';

class FoodItemListed extends Component {
    render() {
        let data = this.props.item;
        let index = this.props.ind;

        let categories = data["categories"];
        let searchTerms = data["searchTerms"];
        let pictures = data["pictures"];
        let reviews = data["reviews"];
        let flags = data["flags"];
  
        return (
           <ul className="food-item-ul" key={index}>
              <li>{data["_id"]}</li>
              <li>{data["restaurant"]}</li>
              <li>{data["food"]}</li>
              <li>{data["price"]}</li>
              <ul>
              {
                 categories.map((item, key) => (
                    <li key={key}>{item}</li>
                 ))
              }
              </ul>
              <ul>
              {
                 searchTerms.map((item, key) => (
                    <li key={key}>{item}</li>
                 ))
              }
              </ul>
              <li>{data["location"]}</li>
              <ul>
              {
                  pictures.map((item, key) => (
                     //<li key={key}>{item}</li>
                     <img src={item} alt="sandwich" height={100}/>
                 ))
              }
              </ul>
              <li>{data["description"]}</li>
              <ul>
              {
                 reviews.map((item, key) => (
                    <ul key={key}>
                    Reviews:
                    {
                       Object.keys(item).map((val, ind) => (
                          <li key={ind}>{val}: {item[val]}</li>
                       ))
                    }
                    </ul>
                 ))
              }
              </ul>
              <ul>
              {
                 flags.map((item, key) => (
                    <ul key={key}>
                    Flags:
                    {
                       Object.keys(item).map((val, ind) => (
                          <li key={ind}>{val}: {item[val]}</li>
                       ))
                    }
                    </ul>
                 ))
              }
              </ul>
           </ul>
        );
     }
  }

  export default FoodItemListed;