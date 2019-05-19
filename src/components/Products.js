import React, { Component } from 'react';
import util from '../util'
import './Products.css'
class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}>
                        <div className="item-picture"><img className="items-picture" src={`products/${product.sku}_2.jpg`} alt={product.title} /></div>
                        <br/>
                        <div className="products-title">{product.title}</div>                        
                    </a>
                    <div className="product-price-current">{util.formatCurrency(product.price)}</div>
                    <br/>
                    <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>I krepseli</button>
                    <br/>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}

export default Products;
