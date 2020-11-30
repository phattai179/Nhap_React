import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    products = [
        { id: 1, name: 'Iphone', price: 1000 },
        { id: 2, name: 'Iphone X', price: 1500 },
        { id: 3, name: "Iphone XS", price: 2000 },
    ]

    // for in
    renderProduct = () => {
        let arrJSX = [];
        for (let index in this.products) {
            let product = this.products[index];
            // Từ sản phẩm lấy ra chuyển thành đối tượng jsx 
            let jsxProduct = <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/200/200" alt="213.jpg" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>

            arrJSX.push(jsxProduct);
        }

        return arrJSX;
    }

    // render with map
    renderProductWithMap = () => {
        return this.products.map((product, index) => {
            return <div className="col-4" key={index}>
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/200/200" alt="213.jpg" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        })
    }

    // render with table 
    renderTable = () => {
        return this.products.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        })
    }


    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    {/* {this.renderProduct()} */}
                    {this.renderProductWithMap()}

                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
