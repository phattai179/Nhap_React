
import React from 'react'

export default function DataBinding() {
    // Building biến và đối tượng
    const title = 'ĐH GTVT TP.HCM'
    const imgSrc = 'https://picsum.photos/200/200';


    const sinhVien = {
        maSV: '0001',
        tenSinhVien: 'Nguyễn Phi Hùng',
        hinhAnh: 'https://picsum.photos/200/200',
    }

    // Building hàm

    const renderImg = () =>{

        // Giá trị phải trả về 1 chuỗi, số, jsx (1 đoạn code html được bao phủ bởi 1 thẻ)
        return <div>
            <h3>Hình ảnh</h3>
            <img src = {sinhVien.hinhAnh} width = "200" height = "200"/>
            
        </div>
    }

    // Render main
    return (
        <div className="container">
            <h3>DataBinding</h3>
            <p id="title" className="display-4">Tiêu đề: {title}</p>
            <img src={imgSrc} width="200" height="200" alt="123.jpg" />

            <input className="form-control w-25 mt-3" value={title} ></input>

            <hr />
            <h3 className="display-5" >Thông tin sinh viên</h3>

            <div className="card" style = {{width:300, height:300}}>
                <img className="card-img-top" src={sinhVien.hinhAnh} alt = "123.jpg" />
                <div className="card-body">
                    <h4 className="card-title">{sinhVien.tenSinhVien}</h4>
                    <p className="card-text">{sinhVien.maSV}</p>
                </div>
            </div>

            <div className = "mb-5 pt-2">
                {renderImg()}
            </div>

        </div>
    )
}
