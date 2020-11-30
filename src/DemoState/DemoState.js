import React, { Component } from 'react'

export default class DemoState extends Component {

    state = {
        isLogin: false,
    }

    rederContent = () => {
        if(this.state.isLogin) {
            return <p>
                Hello !! {this.userName};
            </p>
        }
        return <button onClick = {() => {
            this.handleLogin();
        }} className = "btn btn-success">
            Đăng nhập
        </button>
    }

    handleLogin = () => {
        this.setState ({
            isLogin: true,
        })
    }

    userName = 'Phát Tài'

    render() {
        return (
            <div>
                <h3>If else react</h3>
                {/* {this.state.isLogin ? <p>Hello {this.userName}</p> : <button>Đăng nhập</button>} */}
                {this.rederContent()}
            </div>
        )
    }
}
