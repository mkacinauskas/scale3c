import React, { Component } from 'react';
import Products from './components/Products';
import Basket from './components/Basket';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { size: '', sort: '', cartItems: [], products: [], filteredProducts: [] };
  }
  componentWillMount() {

    if (localStorage.getItem('cartItems')) {
      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
    }

    fetch('http://localhost:8000/products').then(res => res.json())
      .catch(err => fetch('db.json').then(res => res.json()).then(data => data.products))
      .then(data => {
        this.setState({ products: data });
        this.listProducts();
      });
  }

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== product.id);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    })
  }

  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  }

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== '') {
        state.products.sort((a, b) =>
          (state.sort === 'lowestprice'
            ? ((a.price > b.price) ? 1 : -1)
            : ((a.price < b.price) ? 1 : -1)));
      } else {
        state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
      }
      if (state.size !== '') {
        return { filteredProducts: state.products.filter(a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0) };
      }
      return { filteredProducts: state.products };
    })
  }
  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
    this.listProducts();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
        <br/>
          <div className="row">
            <div className="col-md-9">
              <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
            </div>
            <div className="col-md-3">
              <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
            </div>
          </div>
        </div>
        <hr className="Line"/>
        <Footer />
        <hr className="Line"/>
        <div className="reserved">
          <p>© 2019 UAB „Barbora“. Visos teisės saugomos.</p>
        </div>
      </div>  
    );
  }
}

export default App;
