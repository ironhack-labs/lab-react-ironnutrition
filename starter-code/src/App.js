import React, { Component } from 'react';
import './App.css';
import FoodList from './Components/FoodList';
import NewFood from './Components/NewFood';
import FoodContextProvider from './contexts/FoodContext';
import Search from './Components/Search';
import Columns from 'react-bulma-components/lib/components/columns';
import TodaysFoods from './Components/TodaysFoods';
import Container from 'react-bulma-components/lib/components/container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodContextProvider>
        <Container> 
          <Columns>
            <Columns.Column>
              <Search/>
              <FoodList/>
              <NewFood/>
            </Columns.Column>
            <Columns.Column>
              <TodaysFoods/>
            </Columns.Column>
          </Columns>
          </Container>
        </FoodContextProvider>
      </div>
    );
  }
}

export default App;
