import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Url from 'url-parse';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.getMenus = this.getMenus.bind(this);
  }

  getMenus(id) {
    $.ajax({
      type: 'GET',
      url: `/api/restaurants/${id}/menu`,
      success: (data) => { console.log('AJAX RETURN: ', data) }
    })
  }

  componentDidMount() {
    let url = new Url(window.location.href);
    let id = url.pathname.split('/')[2];
    this.getMenus(id);
  }

  render() { 
    return ( 
      <div>
        <h1>Hello World 2</h1>
      </div>
     );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
