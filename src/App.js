import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Palette from './Palette'
import seedColors from './seedColors';
import {generatePalette} from './ColorHelpers'
import PaletteList from './PaletteList'

class App extends Component{

  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path ='/' render= {() => <PaletteList palette={seedColors} />}
      />
       <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
    </Switch>
    
    );
  }
}


export default App;
