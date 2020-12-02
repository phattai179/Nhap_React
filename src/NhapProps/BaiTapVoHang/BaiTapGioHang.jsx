import React, { Component } from 'react'
import DanhSachSanPhamGioHang from './DanhSachSanPhamGioHang'
import ModalGioHang from './ModalGioHang'
import phoneData from '../../Data/dataPhone.json';

export default class BaiTapGioHang extends Component {

    constructor(props) {
        super(props)

        this.state = {
            gioHang: []
        }
    }

    // Lấy dữ liệu tại components giỏ hàng
    themGioHang = (sanPhamChon) => {
        console.log(sanPhamChon)
        // Bước 1: Từng sp được chọn tạo ra sp giỏ hàng
        let spGioHang = {
            "maSP": sanPhamChon.maSP,
            "tenSP": sanPhamChon.tenSP,
            "giaBan": sanPhamChon.giaBan,
            "hinhAnh": sanPhamChon.hinhAnh,
            "soLuong": 1
        }

        // Bước 2: Kiểm tra spChon có trong giỏ hàng chưa
        var gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
        if(index !== -1) {
            // Sản phẩm được click đã có trong this.state.gioHang
            gioHangCapNhat[index].soLuong += 1;
        }else{
            // Sản phẩm được click chưa có trong this.state.gioHang
            gioHangCapNhat.push(spGioHang)
        }

        // Set state để components render lại
        this.setState({
            gioHang: gioHangCapNhat
        })

        // this.setState({
        //     gioHang: [...this.state.gioHang, sanPhamChon]
        // })
        
    }

    // Đặt sự kiện xóa giỏ hàng tại BT giỏ hàng
    xoaGioHang = (maSP) => {
        // Tìm trong giỏ hàng có maSP được click thì xóa nó đi

        // var gioHangCapNhat = [...this.state.gioHang];

        // let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);

        // if(index !== -1){
        //     gioHangCapNhat.splice(index,1);
        // }

        var gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== maSP);

        // Cập nhật lại state giỏ hàng và render giao diện
        this.setState({
            gioHang: gioHangCapNhat,
        })
    }

    tangGiamSoLuong = (maSP, tangGiam) => // Nếu mà tăng giảm === true: tăng số lượng, false giảm số lượng 
    {
        var gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP)
        // Xử lý tăng giảm
        if(tangGiam){
            gioHangCapNhat[index].soLuong += 1;
        }else{
            if(gioHangCapNhat[index].soLuong > 1){
                gioHangCapNhat[index].soLuong -= 1;
            }
        }

        // cập nhật lại giá trị và render lại giỏ hàng
        this.setState({
            gioHang: gioHangCapNhat,
        }) 

    }

    render() {

        let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
            return tsl += spGH.soLuong;
        }, 0)

        return (
            <div className="container">
                <h3 className="text-center text-success">BÀI TẬP GIỎ HÀNG</h3>
                <ModalGioHang tangGiamSoLuong = {this.tangGiamSoLuong} xoaGioHang = {this.xoaGioHang} gioHang={this.state.gioHang} />
                <div className="text-right">
                    <span className="text-danger" style={{ cursor: "pointer", fontSize: "17", fontWeight: "bold" }} data-toggle="modal" data-target="#modelId">Giỏ hàng ({tongSoLuong})</span>
                </div>
                <DanhSachSanPhamGioHang themGioHang={this.themGioHang} mangSanPham={phoneData} />
            </div>
        )
    }
}   
