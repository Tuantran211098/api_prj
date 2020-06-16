import React, { Component } from 'react';
class CartResult extends Component {
    render( ) {
        var { cart } = this.props;
        return (
            <tr>
                  <td colSpan="5"></td>
                  <td>Tổng Cộng</td>
                  <td>{this.showTotalCart(cart)}</td>
            </tr>
        )
    }
    showTotalCart = ( cart ) => {
        var total = 0;
        if ( cart.length > 0 ) {
            for ( var i = 0; i < cart.length; i++ ) {
                total += cart[ i ].price * cart[ i ].quantity
            }
        }
        return total;
    }
}

export default CartResult;
