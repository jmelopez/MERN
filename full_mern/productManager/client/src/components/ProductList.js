import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { removeFromDom, product , setProduct } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(( res ) => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(( err ) => {
            console.log(err);
        })
    }, [])

    return(
        <div>
            <h1>All Products:</h1>
            {
                product.map((product, index) => {
                    return(
                        <div key={index}>
                            <ul  className='products'>
                                <div>
                                    <Link className='Links' to={`/product/${product._id}`}> {product.title} </Link> 
                                </div>
                                <div>
                                    <Link className='Links' to={`/product/edit/${product._id}`}>Edit Product </Link> 
                                </div>
                                <div>
                                    <button  className='btn' onClick={ (e) => {deleteProduct(product._id) }}>Delete Product</button>
                                </div>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;