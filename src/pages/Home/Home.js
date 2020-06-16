import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemProduct from './../../components/Home/ItemProduct';
import CallApi from './../../untils/callApi';
class Home extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            product: [ ]
        }
    }
    componentDidMount( ) {
        CallApi( 'productrocks', 'GET', null ).then( res => {
            var product = res.data
            this.setState( {
                product: product
            } )
        } );
    }
    render( ) {
        var { product } = this.state
        return (

            <div class="row">
                {this.showproduct(product)}
             </div>

        )
    }
    showproduct = ( product ) => {
        var result = null;
        if ( product.length > 0 ) {
            result = product.map( ( product, index ) => {
                return (
                    <ItemProduct key={index} index={index} product={product}/>
                )
            } )
        }
        return result;
    }
}
const mapStateToprops = ( state, props ) => {
    return {
        product: state.Product
    }
}
export default connect( mapStateToprops, null )( Home );
