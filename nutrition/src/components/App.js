import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import ListFood from './ListFood/ListFood'
import TodayFood from './TodayFood/TodayFood'



function App() {
  return (
          
            <div id="root">
              <div className="container">
                <h1 className="title">IronNutrition</h1>
                <div>

                </div>
                <div className="columns">
                    <div className="column">
                      <ListFood />
                    </div>
                    <div className="column content">
                        <h2 className="subtitle">Today's foods</h2>
                          <TodayFood />
                        <strong>Total: 700 cal</strong>
                    </div>
                </div>
              </div>
            </div>
         
  );
}

export default App;

