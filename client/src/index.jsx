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

  switchCard(position) {
    let activeCard = this.state.menu.cards[position];
    this.setState({activeCard});
  }

  storeMenu(menu) {
    menu = menu[0];
    let activeCard = menu.cards[0];
    let cardLinks = menu.cards.map((card, i) => {
      return {
        name: card.name,
        position: i
      }
    });

    this.setState({ menu, cardLinks, activeCard });
  }

  getMenu(id) {
    $.ajax({
      type: 'GET',
      url: `/api/restaurants/${id}/menu`,
      success: this.storeMenu
    })
  }

  componentDidMount() {
    let url = new Url(window.location.href);
    let id = url.pathname.split('/')[2];
    this.getMenu(id);
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
