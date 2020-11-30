import React, { Component } from 'react'

export default class HandleEvent extends Component {

    // Phương thức 
    showMess = () => {
        alert('Hello Tai-Sama')
    }

    showInfo = (info) => {
        alert(info);
    }


    render() {
        const title = 'Akame'

        
        return (
            <div>
                <h3>Handle Event</h3>
                <button onClick = {this.showMess}>Click me</button>

                {/* C1 */}
                <button onClick = { () => {
                    {this.showInfo('Đụ con đỉ mẹ mày')}
                }}>
                    Show info C1
                </button>

                {/* C2 */}
                <button onClick = {() => {
                    alert(`hello ${title}`)
                }}>Show info C2</button>

            </div>
        )
    }
}
