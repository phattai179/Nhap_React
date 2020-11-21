import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import ProductLapTop from './ProductLapTop'
import ProductList from './ProductList'

export default class BaiTapReact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <ProductList/>
                <ProductLapTop/>
                <Footer/>
            </div>
        )
    }
}
