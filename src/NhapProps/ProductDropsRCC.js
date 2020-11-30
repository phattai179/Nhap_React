import React, { Component } from 'react'

export default class ProductDropsRCC extends Component {
    render() {

        // let {sanPhamProps} = this.props
        let {hinhAnh, tenSP, giaBan} = this.props.sanPhamProps;


        return (
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt = "143" />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">{giaBan}</p>
                </div>
            </div>

        )
    }
}
