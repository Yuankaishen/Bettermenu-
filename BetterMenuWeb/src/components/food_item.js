import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

//CSS
import '../css/food_item.css';

class FoodItem extends Component {
    render() {
        let data = this.props.item;
        let index = this.props.ind;

        let categories = data["categories"];
        let searchTerms = data["searchTerms"];
        let pictures = data["pictures"];
        let reviews = data["reviews"];
        let flags = data["flags"];
  
        return (
            <Row flexGrow={1} vertical='center' horizontal='spaced' style={{backgroundColor: 'grey', maxWidth: 300 }}>
                <Column style={{ backgroundColor: 'blue', color: 'white' }}>
                    <span> Content 1 </span>
                    <span> Content 2 </span>
                </Column>
                <Column style={{ backgroundColor: 'red', color: 'white' }}>
                    <span> Content 3 </span>
                    <span> Content 4 </span>
                    <span> Content 5 </span>
                </Column>
            </Row>

            // <ul className="food-item-ul" key={index}>
            //     {
            //         pictures.map((item, key) => (
            //             <img src={item} alt="sandwich" height={100}/>
            //         ))
            //     }

            //     <h2>{data["food"]}</h2>
            //     <h6>{data["restaurant"]}</h6>
            //     <h4>{data["price"]}</h4>
            // </ul>
        );
    }
}

  export default FoodItem;