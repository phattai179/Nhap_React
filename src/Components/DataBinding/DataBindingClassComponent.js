import React, { Component } from 'react'

export default class DataBindingClassComponent extends Component {
    // Thuộc tính
    sinhVien = {
        ma: '001',
        ten: 'Nguyễn Văn Tèo',
        hinhAnh: 'https://picsum.photos/200',
    }

    // Phương thức
    renderPicture = () => {
        return <img src={this.sinhVien.hinhAnh} height="300" width="300" />

    }


    render() {

        const title = "FrontEnd 54"
        const renderTitle = () => {
            return <p className="text-danger">
                {title}
            </p>
        }


        return (
            <div className="container">
                <h3>React databinding class components</h3>
                <p>Tiêu đề: {title}</p>
                {renderTitle()}
                <h3>Thông tin sinh viên</h3>
                <ul>
                    <li>Mã sinh viên: {this.sinhVien.ma}</li>
                    <li>Tên sinh viên: {this.sinhVien.ten}</li>
                    <li><img src={this.sinhVien.hinhAnh} width="200" height="200" alt="123.jpg" /></li>
                    <li>{this.renderPicture()}</li>
                </ul>
            </div>

            
        )
    }
}
