import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Home extends Component {
    render( ) {
        var { product, index } = this.props;
        console.log( )
        return (
            <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <img src={product.image} alt="..."/>
                        <div class="caption">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <p>{this.showRating(product.rating)}</p>
                        <p>
                        
                            <Link to={{
                                pathname: `/${product.id}/Detail`,                               
                                hash: `${product.name}`,
                                state: { product }
                            }} class="btn btn-default" role="button">Detail</Link>
                        </p>
                        </div>
                    </div>
                </div>
        )
    }
    showRating = ( rating ) => {
        var result = [ ];
        if ( rating.length > 0 ) {
            for ( var i = 0; i < rating; i++ ) {
                result.push( <i key={i} class="fa fa-star"></i> );
            }
            for ( var j = 0; j < ( 5 - rating ); j++ ) {
                result.push( <i key={j+i}  class="fa fa-star-o"></i> )
            }
        }
        return result;
    }
}

export default Home;
