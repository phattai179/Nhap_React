import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import ProductLapTop from './ProductLapTop'
import ProductList from './ProductList'

export default class BaiTapReact extends Component {

    mangSanPham = [
        { maSP: 1, tenSP: 'Black Berry',hinhAnh:'./img/sp_blackberry.png', gia: 1000 },
        { maSP: 2, tenSP: 'Iphone X',hinhAnh:'./img/sp_iphoneX.png', gia: 2000 },
        { maSP: 3, tenSP: 'Note 7',hinhAnh:'./img/sp_note7.png', gia: 3000 },
        { maSP: 3, tenSP: 'Vivo 850',hinhAnh:'./img/sp_vivo850.png', gia: 3000 }
    ]
    
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <ProductList mangSanPham = {this.mangSanPham}/>
                <ProductLapTop/>
                <Footer/>
            </div>
        )
    }
}
