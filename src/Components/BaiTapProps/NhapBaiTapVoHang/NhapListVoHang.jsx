import React, { Component } from 'react'
import NhapSanPhamVoHang from './NhapSanPhamVoHang'

export default class NhapListVoHang extends Component {
    
    
    render() {
        const {mangSanPham, themVoHang} = this.props;

        return (
            <div className="container">
                <div className="row">
                    {mangSanPham.map((sanPham, index) => {
                        return (
                            <div className="col-4" key={index}>
                                <NhapSanPhamVoHang themVoHang = {themVoHang} sanPham = {sanPham} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
