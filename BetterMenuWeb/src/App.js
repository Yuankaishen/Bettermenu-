import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages
import Main from './pages/main';
import FoodList from './pages/food_list';
import Food from './pages/food';
import Review from './pages/review';

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
                    <Route exact path='/food/:id' render={(props) => <Food {...props}></Food>}/>
                    <Route exact path='/review' component={Review}/>
                    {/* 5a9958772ce0c0d9655 */}
                    {/* 7a349875ce0c0d3425 */}

                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
