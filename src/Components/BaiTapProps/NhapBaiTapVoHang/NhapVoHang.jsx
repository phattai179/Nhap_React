import React, { Component } from 'react'
import NhapListVoHang from './NhapListVoHang'
import NhapModalVoHang from './NhapModalVoHang'
import phoneData from '../../../Data/dataPhone.json';

export default class NhapVoHang extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             gioHang: [
                // {
                // "maSP": 1,
                // "tenSP": "VinSmart Live",
                // "giaBan": 5700000,
                // "hinhAnh": "./img/vsphone.jpg",
                // "soLuong": 1,
                // }
            ]
        }
    }
    

    themVoHang = (sanPhamChon) => {
        // console.log(sanPhamChon);
        // Tạo 1 mảng giỏ hàng update
        var gioHangCapNhat = [...this.state.gioHang];
        var sanPhamGioHang = {
            maSP: sanPhamChon.maSP,
            tenSP: sanPhamChon.tenSP,
            giaBan: sanPhamChon.giaBan,
            hinhAnh: sanPhamChon.hinhAnh,
            soLuong: 1,
        }

        let index = gioHangCapNhat.findIndex(sp => sp.maSP === sanPhamChon.maSP);

        if(index !== -1){
            gioHangCapNhat[index].soLuong += 1;
        }else{
            gioHangCapNhat.push(sanPhamGioHang);
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    xoaVoHang = (maSP) => {
        // var gioHangCapNhat = [...this.state.gioHang];
        // let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);

        // if(index !== -1){
        //     gioHangCapNhat.splice(index, 1);
        // }

        var gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== maSP);

        this.setState({
            gioHang: gioHangCapNhat
        })

    }

    tangGiamSoLuong = (maSP, tangGiam) => {
        var gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);

        if(tangGiam){
            gioHangCapNhat[index].soLuong += 1;
        }else{
            if(gioHangCapNhat[index].soLuong > 1){
                gioHangCapNhat[index].soLuong -= 1;
            }
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }  



    render() {

        let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
            return tsl += spGH.soLuong;
        }, 0)

        return (
            <div className="container">
                <NhapModalVoHang tangGiamSoLuong = {this.tangGiamSoLuong} xoaVoHang = {this.xoaVoHang} gioHang = {this.state.gioHang}/>
                <h3 className="text-left text-primary" >BÀI TẬP VỎ HÀNG</h3>
                <div className="text-right">
                    <span className="text-danger" style={{
                        cursor: "pointer",
                        fontSize: "17px",
                        fontWeight: "bold"
                    }} data-toggle="modal" data-target="#modelId" >Vỏ hàng ({tongSoLuong})</span>
                </div>
                <NhapListVoHang themVoHang = {this.themVoHang} mangSanPham={phoneData} />
            </div>
        )
    }
}
