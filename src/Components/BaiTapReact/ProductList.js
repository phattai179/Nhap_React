import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <div className = "container-fluid bg-dark pb-5">
                <h3 className = "text-center text-white pt-2 pb-2" > BEST SMART PHONE </h3>
                <div className = "row">
                    <div className = "col-3">
                        <Product/>
                    </div>

                    <div className = "col-3">
                        <Product/>
                    </div>

                    <div className = "col-3">
                        <Product/>
                    </div>

                    <div className = "col-3">
                        <Product/>
                    </div>
                </div>
            </div>
        )
    }
}
