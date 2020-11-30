import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgSrc: './img/car/products/black-car.jpg'
    }

    changeColor = (newColor) => {
        this.setState({
            imgSrc: `./img/car/products/${newColor}-car.jpg`
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.imgSrc} className="w-100" alt='123.jpg'></img>
                    </div>

                    <div className="col-6">
                        <div className="card">
                            <div className ="card-header bg-dark text-white text-center">
                                Exterior Color
                            </div>
                            
                            <div className="card-body">
                                <div className = "row mt-2 p-2 border border-black">
                                    <div className = "col-2">
                                        <img onClick = {() => {
                                            this.changeColor('black')
                                        }} src = './img/car/icons/icon-black.jpg' className = "w-100" style = {{cursor:"pointer"}}  />
                                    </div>

                                    <div className = "col-10">
                                        <h3>Black Color</h3>
                                    </div>
                                </div>

                                <div className = "row mt-2 p-2 border border-black">
                                    <div className = "col-2">
                                        <img onClick = {() => {
                                            this.changeColor('silver')
                                        }} src = './img/car/icons/icon-silver.jpg' className = "w-100" style = {{cursor:"pointer"}}  />
                                    </div>

                                    <div className = "col-10">
                                        <h3>Silver Color</h3>
                                    </div>
                                </div>

                                <div className = "row mt-2 p-2 border border-black">
                                    <div className = "col-2">
                                        <img onClick = {() => {
                                            this.changeColor('steel')
                                        }} src = './img/car/icons/icon-steel.jpg' className = "w-100" style = {{cursor:"pointer"}}  />
                                    </div>

                                    <div className = "col-10">
                                        <h3>Steel Color</h3>
                                    </div>
                                </div>

                                <div className = "row mt-2 p-2 border border-black">
                                    <div className = "col-2">
                                        <img onClick = {() => {
                                            this.changeColor('red')
                                        }} src = './img/car/icons/icon-red.jpg' className = "w-100" style = {{cursor:"pointer"}}  />
                                    </div>

                                    <div className = "col-10">
                                        <h3>Red Color</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
