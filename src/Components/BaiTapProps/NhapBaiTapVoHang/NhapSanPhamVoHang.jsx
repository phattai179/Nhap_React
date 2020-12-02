import React, { Component } from 'react'

export default class NhapSanPhamVoHang extends Component {
    render() {
        const {sanPham, themVoHang} = this.props

        return (
            <div className="card">
                <img className="card-img-top" src={sanPham.hinhAnh} alt="123" width = "300" height = "350" />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <button onClick = {() => 
                        themVoHang(sanPham)
                    } className="btn btn-danger">Thêm vỏ hàng</button>
                </div>
            </div>
        )
    }
}
