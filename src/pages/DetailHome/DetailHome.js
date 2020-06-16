import React, { Component } from 'react';
import CallApi from './../../untils/callApi';
import { Link } from "react-router-dom";
class DetailHome extends Component {

    onAdd = ( product, id ) => {
        console.log( product )
        var name = product.name;
        var ids = product.id;
        var infor = product.infor;
        var price = product.price;
        var status = product.status;
        var quantity = product.quantity;
        var image = product.image;
        var rating = product.rating
        CallApi( 'cartrock', 'POST', { ids, infor, name, price, status, quantity, image, rating } )
            .then( res => {
                console.log( res.data )
            } )

    }
    render( ) {
        var { location } = this.props;

        var product = location.state.product;

        return (

            <div class="row">
                <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src={`${product.image}`} alt="..."/>
                    <div class="caption">
                    
                    </div>
                </div>
                </div>
                <div class="col-sm-6 col-md-8">
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Thông tin sản phẩm</a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Phương Thức Thanh Toán</a></li>
                    </ul>
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="home">
                            <p>{product.id}</p>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <p>{this.showRating(product.rating)}</p>
                        <p>{product.infor}</p>
                        <p>
                            <Link to='/' class="btn btn-primary" role="button">Back</Link>
                            <button class="btn btn-default" role="button" onClick={()=>this.onAdd(product,product.id)}>Add</button>
                        </p>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="profile">
                            <h2>Profile</h2>
                        </div>
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
export default DetailHome;
