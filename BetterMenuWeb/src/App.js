import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages
import Main from './pages/main';
import FoodList from './pages/food_list';

//Components
import Navigation from './components/navigation';
import Footer from './components/footer';

//CSS
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App-div">
                    <Navigation/>

                    <Route exact path='/' component={Main}/>
                    <Route exact path='/foodlist' component={FoodList}/>

                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
