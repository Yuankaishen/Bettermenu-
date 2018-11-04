import React, { Component } from 'react';

//Test data
import td from '../testdata.json';

//Components
import FoodItem from '../components/food_item';

class FoodList extends Component {
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

export default FoodList;