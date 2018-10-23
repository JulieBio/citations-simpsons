import React, { Component } from 'react';
import './App.css';
import  GenerateCitation  from  './GenerateCitation';
import  DisplayCitation  from  './DisplayCitation';

const citation = {
       "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
       "character": "Nelson Muntz",
       "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
       "characterDirection" : "Left"  
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleCitation par défaut
      // afin d'avoir toujours un employé d'affiché
      quote : citation
    };
  }

  getCitation() {
    // Récupération des citations via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=Num")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote:  data[0],
        });
    });
}
  render() {
    return (
      <div>
        <GenerateCitation  selectCitation={() =>  this.getCitation()}  />
        <DisplayCitation  citation={this.state.quote}  />
      </div>
    );
  }
}

export default App;

