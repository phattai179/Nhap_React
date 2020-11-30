import React, { Component } from 'react'
import phoneData from '../../../Data/dataPhone.json';
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sanPhamChiTiet: phoneData[0]
        }
    }

    renderSanPham = () => {
        return phoneData.map((dt, index) => {
               
            return (
                <SanPham dt = {dt} key = {index} xemChiTiet = {this.xemChiTiet}/>
            )
            // <div className="col-4" key={index}>
            //     <div className="card">
            //         <img className="card-img-top" height={300} width={250} src={dt.hinhAnh} alt="123.jpg" />
            //         <div className="card-body">
            //             <h4 className="card-title">{dt.tenSP}</h4>
            //             <p className="card-text">{dt.gia}</p>
            //             <button onClick={() => this.xemChiTiet(dt)} className="btn btn-success" >Xem Chi Tiết</button>
            //         </div>
            //     </div>
            // </div>
        })
    }

    xemChiTiet = (sanPham) => {
        this.setState({
            sanPhamChiTiet: sanPham
        })
    }

    render() {
        let { sanPhamChiTiet } = this.state

        return (
            <div className="container">
                <div className="row">
                    {this.renderSanPham()}
                </div>

                <hr></hr>

                <div className="row">
                    <div className="col-6 text-left">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} height={300} width={250} alt = "124"></img>
                    </div>

                    <div className="col-6">
                        <h3>Thông số kỹ thuật</h3>
                        <table className = "table">
                            <tr>
                                <td>Tên sản phẩm: </td>
                                <td>{sanPhamChiTiet.tenSP}</td>
                            </tr>

                            <tr>
                                <td>Màn hình: </td>
                                <td>{sanPhamChiTiet.manHinh}</td>
                            </tr>

                            <tr>
                                <td>Hệ điều hành: </td>
                                <td>{sanPhamChiTiet.heDieuHanh}</td>
                            </tr>

                            <tr>
                                <td>Camera trước: </td>
                                <td>{sanPhamChiTiet.cameraTruoc}</td>
                            </tr>

                            <tr>
                                <td>Camera sau: </td>
                                <td>{sanPhamChiTiet.cameraSau}</td>
                            </tr>

                            <tr>
                                <td>RAM: </td>
                                <td>{sanPhamChiTiet.ram}</td>
                            </tr>

                            <tr>
                                <td>Rom: </td>
                                <td>{sanPhamChiTiet.rom}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
