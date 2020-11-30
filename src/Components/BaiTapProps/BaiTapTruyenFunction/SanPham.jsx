import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {

        let {dt} = this.props;
        // let {xemChiTiet} = this.props

        return (
                <div className="col-4">
                <div className="card">
                    <img className="card-img-top" height={300} width={250} src={dt.hinhAnh} alt="123.jpg" />
                    <div className="card-body">
                        <h4 className="card-title">{dt.tenSP}</h4>
                        <p className="card-text">{dt.gia}</p>
                        <button onClick={() => this.props.xemChiTiet(dt)} className="btn btn-success" >Xem Chi Tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
