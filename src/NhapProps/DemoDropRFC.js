import React, { Component } from 'react'
import ProductPropsRFC from './ProductPropsRFC'

export default class DemoDropRFC extends Component {
    render() {
        return (
            <div className = "container">
                <h3 className = "text-center text-danger mt-5">Danh Sách Sản Phẩm</h3>
                <div className = "row">
                    <div className = "col-3">
                        <ProductPropsRFC name = {'IphoneX'} gia = {1000}/>
                    </div>
                    <div className = "col-3">
                        <ProductPropsRFC name = {'SamSung GalaxyS6'} gia = {1200}/>
                    </div>
                    <div className = "col-3">
                        <ProductPropsRFC name = {'Nokia Lumia'} gia = {1500}/>
                    </div>
                    <div className = "col-3">
                        <ProductPropsRFC name = {'Xiaomi Redmi5'} gia = {2000}/>
                    </div>
                </div>
            </div>
        )
    }
}
