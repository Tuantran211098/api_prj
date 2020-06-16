import React, { Component } from 'react';
import CartItem from './../../components/Cart/cart';
import { connect } from 'react-redux';
import CallApi from './../../untils/callApi';
import CartResult from './../../components/Cart/cartResult';
class Home extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            cart: [ ]
        }
    }
    componentDidMount( ) {
        CallApi( 'cartrock', 'GET', null ).then( res => {
            var cart = res.data
            this.setState( {
                cart: cart

            } )

        } )

    }
    onDelete = ( id ) => {
        var { cart } = this.state;
        CallApi( `cartrock/${id}`, 'DELETE', null ).then( res => {
            var index = this.findIndex( cart, id );
            if ( index !== -1 ) {
                cart.splice( index, 1 )
                this.setState( {
                    cart: cart
                } )
            }
        } )
    }

    findIndex = ( cart, id ) => {
        var result = -1;
        cart.forEach( ( cart, index ) => {
            if ( cart.id === id ) {
                result = index
            }
        } )
        return result;
    }
    render( ) {
        var { cart } = this.state;

        console.log( cart )
        return (
            <div className="table-responsive">    
                <table class="table table-bordered table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>IMAGE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showCart(cart)}
                        {this.showcartResult(cart)}
                    </tbody>
                </table>
          </div>

        )
    }
    showCart = ( cart ) => {
        var result = null;
        if ( cart.length > 0 ) {
            result = cart.map( ( cart, index ) => {
                return (
                    <CartItem key={index} index={index} cart={cart} onDelete={this.onDelete}/>
                )
            } )
        }
        return result;
    }
    showcartResult = ( cart ) => {
        var total = 0;
        if ( cart.length > 0 ) {
            return <CartResult cart={cart}/>
        }
        return total;
    }
}
const mapStateToProps = ( state, props ) => {
    return {
        cart: state.Cart
    }
}

export default connect( mapStateToProps, null )( Home );
