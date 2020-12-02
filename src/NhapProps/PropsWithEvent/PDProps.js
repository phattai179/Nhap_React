import React, { Component } from 'react'

export default class PDProps extends Component {
    render() {

        let {product, viewDetailProps} = this.props

        return (
            <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src={product.hinhAnh} height="350" alt="451" />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <button onClick={() => viewDetailProps(product)} className="btn btn-success" >Xem chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
