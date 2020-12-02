import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import Modal from './Modal'
import ProductLapTop from './ProductLapTop'
import ProductList from './ProductList'

export default class BaiTapReact extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             sanPhamModal : {maSP: 1, tenSP: 'Black Berry',hinhAnh:'./img/sp_blackberry.png', gia: 1000 },
        }
    }
    
    

    mangSanPham = [
        { maSP: 1, tenSP: 'Black Berry',hinhAnh:'./img/sp_blackberry.png', gia: 1000 },
        { maSP: 2, tenSP: 'Iphone X',hinhAnh:'./img/sp_iphoneX.png', gia: 2000 },
        { maSP: 3, tenSP: 'Note 7',hinhAnh:'./img/sp_note7.png', gia: 3000 },
        { maSP: 3, tenSP: 'Vivo 850',hinhAnh:'./img/sp_vivo850.png', gia: 3000 }
    ]

    xemChiTiet = (sanPhamChiTiet) => {
        this.setState({
            sanPhamModal : sanPhamChiTiet
        })
    }

    
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <ProductList mangSanPham = {this.mangSanPham} xemChiTiet = {this.xemChiTiet} />
                <ProductLapTop/>
                <Footer/>
                <Modal sanPhamModal = {this.state.sanPhamModal} />
            </div>
        )
    }
}
