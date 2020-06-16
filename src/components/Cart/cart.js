import React, { Component } from 'react';
class CartItem extends Component {
    onDelete = ( id ) => {
        if ( confirm( 'are you sure ?' ) ) { //eslint-disable-line
            this.props.onDelete( id )
        }
    }
    render( ) {
        var { cart, index } = this.props;
        console.log( cart.infor )
        return (
            <tr>
                    <td>{index + 1}</td>
                    <td>{cart.ids}</td>
                    <td>{cart.name}</td>
                    <td>{cart.price}</td>
                    <td><img src={`${cart.image}`}/></td>
                    <td>
                        <span class="fa fa-minus" onClick={()=>this.onUpdate(cart.id,cart.quantity -1)}></span> &nbsp;
                        <span>{cart.quantity}</span>&nbsp;&nbsp;
                        <span class="fa fa-plus"></span>
                    </td>
                    <td>{this.showTotal(cart)}</td>
                    <td>
                        <i class="fa fa-trash" onClick={()=>this.onDelete(cart.id)}></i>
                    </td>
            </tr>
        )
    }
    showTotal = ( cart ) => {
        var total = 0;
        return (
            total = cart.price * cart.quantity
        )
        return total;
    }
}

export default CartItem;
