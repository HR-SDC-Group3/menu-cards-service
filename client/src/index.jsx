import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Url from 'url-parse';
import Navigation from './components/Navigation.jsx';
import CardDisplay from './components/CardDisplay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {},
      cardLinks: [],
      activeCard: {}
    }
    
    this.getMenu = this.getMenu.bind(this);
    this.storeMenu = this.storeMenu.bind(this);
    this.switchCard = this.switchCard.bind(this);
  }
  
  componentDidMount() {
    let url = new Url(window.location.href);
    let id = url.pathname.split('/')[2];
    this.getMenu(id);
  }

  getMenu(id) {
    $.ajax({
      type: 'GET',
      url: `/api/restaurants/${id}/menu`,
      success: this.storeMenu
    })
  }
  
  storeMenu(menu) {
    menu = menu[0];
    let cardLinks = menu.cards.map((card, i) => {
      return {
        name: card.name,
        position: i
      }
    });
    let activeCard = menu.cards[0];
    
    this.setState({ menu, cardLinks, activeCard });
  }
  
  switchCard(position) {
    let activeCard = this.state.menu.cards[position];
    this.setState({activeCard});
  }

  render() { 
    return ( 
      <div>
        <h1 id="menu">Menu</h1>
        <Navigation cardLinks={this.state.cardLinks} switchCard={this.switchCard}/>
        {this.state.activeCard.sections ? (<CardDisplay card={this.state.activeCard} />) : (null)}
      </div>
     );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
