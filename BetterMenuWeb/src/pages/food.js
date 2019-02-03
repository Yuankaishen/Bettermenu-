import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

class Food extends Component {
    render() {
        let data = this.props.location.props["data"];

        return (
            <Column alignItems="center" justifyContent="center">
                <Row>
                    <img src={data["pictures"][0]} alt={data["food"]}></img>
                </Row>

                <Row>
                    <h2>Description</h2>            <h5>Cost</h5>
                </Row>

                <Row>
                    Map
                </Row>

                <Row>
                    Reviews
                </Row>
            </Column>
        );
    }
}

export default Food;