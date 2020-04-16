import React, { Fragment, Component } from 'react';
import CardList from './CardList';
import SearchBox from '../components/SearchBox';
import { products } from '../products';
import '../style/App.css';
import ErrorBoundary from '../components/ErrorBoundary.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: products,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const filteredProducts = this.state.products.filter(product => {
      return (
        product.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        || product.color.toLowerCase().includes(this.state.searchField.toLowerCase())
        || product.productType.toLowerCase().includes(this.state.searchField.toLowerCase())
      );
    })
    return (
      <Fragment>
        <header className='tc'>
          <h1>Inventory</h1>
          <div className='dib'>
            <SearchBox searchChange={ this.onSearchChange }/>
          </div>
        </header>
        <div className='tc'>
          <ErrorBoundary>
            <CardList products={ filteredProducts }/>
          </ErrorBoundary>
        </div>
      </Fragment>
    );
  }
}

export default App;
