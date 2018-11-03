import React, { Component } from 'react';
import './App.css';
import td from './testdata.json';

class App extends Component {

  renderUL(key, toRender) {
    return (
      <ul key={key}>
        {
          toRender.map((key, item) => (
            <li>{item}</li>
          ))
        }
      </ul>
    );
  }

  render() {
    var renderData = [];
    for (let i = 0; i < td.info.length; i++) {
      let renderPart = []
      for (let key in td.info[i]) {
        renderPart.push(<li>td.info[i].key</li>);
      }

      this.renderUL(i, renderPart);
    }

    return (
      <div>
        {
          
        }
      </div>
    );
  }
}

export default App;
