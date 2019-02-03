import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { Link } from 'react-router-dom';

//CSS
import '../css/food_item.css';

class FoodItem extends Component {
    render() {
        let data = this.props.item;
        let index = this.props.ind;

        let ID = data["_id"];
        let categories = data["categories"];
        let searchTerms = data["searchTerms"];
        let pictures = data["pictures"];
        let reviews = data["reviews"];
        let flags = data["flags"];

        this.props = {data:data};

        return (
            <Link to={{pathname: '/food/'+ID, props: this.props}}>
                <Row flexGrow={1} vertical='center' horizontal="spaced" style={{backgroundColor: 'grey', maxWidth: 400, height: 100, margin: 30 }}>
                    <Column>
                        <Row horizontal="spaced" alignItems="center">
                            <Column>
                                {
                                    pictures.map((item, key) => (
                                        <img src={item} alt="sandwich" height={100} width={100}/>
                                    ))
                                }
                            </Column>

                            <Column style={{marginLeft: 15}}>
                                <h2>{data["food"]}</h2>
                                <h6>{data["restaurant"]}</h6>
                            </Column>
                        </Row>
                    </Column>

                    <Column alignSelf="start" style={{marginRight: 10, marginTop: 5}}>
                        <h4 style={{margin:0}}>{data["price"]}</h4>
                        <h4 style={{margin:0, marginTop:45}}>0.2 mi</h4>
                    </Column>
                </Row>
            </Link>
        );
    }
}

  export default FoodItem;