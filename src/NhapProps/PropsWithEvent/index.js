import React, { Component } from 'react'
import PDPropsList from './PDPropsList'

export default class PropsWithEvent extends Component {
    render() {
        return (
            <div className = "container">
                <h3 className = "text-left text-success" >Danh Sách sản phẩm</h3>
                <PDPropsList/>
                
            </div>
        )
    }
}
