import React, { Component } from 'react'
import dataPropsPhone from '../../Data/dataPhone.json';
import PDProps from './PDProps';

export default class PDPropsList extends Component {

    state = {
        sanPham: dataPropsPhone[0]    
    }

    renderPhim = () => {
        return dataPropsPhone.map((dt, index) => {
            return (
                <PDProps viewDetailProps = {this.viewDetailHandler} product = {dt} key = {index}/>

                // <div className="col-4" key={index}>
                //     <div className="card">
                //         <img className="card-img-top" src={dt.hinhAnh} height="350" alt="451" />
                //         <div className="card-body">
                //             <h4 className="card-title">{dt.tenSP}</h4>
                //             <button onClick = {() => this.viewDetailHandler(dt)} className="btn btn-success" >Xem chi tiết</button>
                //         </div>
                //     </div>
                // </div>
            )
        })
    }

    viewDetailHandler = (dienThoai) => {
        // console.log(dienThoai)
        this.setState({
            sanPham: dienThoai
        })
    }
 


    render() {

        let {sanPham} = this.state
        
        return (
            <div className="container">
                <div className="row">
                    {this.renderPhim()}
                </div>

                <hr></hr>

                <div className="row mt-3">
                    <div className="col-6">
                        <h3>{sanPham.tenSP}</h3>
                        <img src = {sanPham.hinhAnh} height = "350" alt = "113" ></img>
                    </div>

                    <div className="col-6">
                        <h3>Thông số kỹ thuật</h3>
                        <table className = "table">
                            <tr>
                                <th>Màn hình</th>
                                <td>{sanPham.manHinh}</td>
                            </tr>

                            <tr>
                                <th>Hệ điều hành</th>
                                <td>{sanPham.heDieuHanh}</td>
                            </tr>

                            <tr>
                                <th>Camera trước</th>
                                <td>{sanPham.cameraTruoc}</td>
                            </tr>

                            <tr>
                                <th>Camera sau</th>
                                <td>{sanPham.cameraSau}</td>
                            </tr>

                            <tr>
                                <th>RAM</th>
                                <td>{sanPham.ram}</td>
                            </tr>

                            <tr>
                                <th>ROM </th>
                                <td>{sanPham.rom}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
