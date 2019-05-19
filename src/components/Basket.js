import React, { Component } from 'react';
import util from '../util'
export default class Basket extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="alert alert-info">
                {cartItems.length === 0
                    ? "Krepselis tuscias" :
                    <div>Jus turite {cartItems.length} prekes krepselyje. <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button>
                                    <br />
                                    {item.count} X {util.formatCurrency(item.price)}
                                </li>))
                            }
                        </ul>

                        <b>Is viso: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                        <br/>
                        <button onClick={() => alert('Laikinai nera')} className="btn btn-primary">Krepselis</button>
                    </div>
                }
            </div>
        )
    }
}
