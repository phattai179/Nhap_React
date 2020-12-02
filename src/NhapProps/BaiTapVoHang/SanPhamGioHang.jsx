import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
    render() {

        const { sanPham, themGioHang } = this.props;

        return (
            <div className="card">
                <img className="card-img-top" src={sanPham.hinhAnh} alt = "124" width = "200" height = "350" />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <button className="btn btn-danger" onClick = {() => {
                        themGioHang(sanPham)
                    }}>Thêm Vỏ hàng</button>
                </div>
            </div>

        )
    }
}
