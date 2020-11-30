import React from 'react'

export default function ProductPropsRFC(props) {

    let {gia, name} = props;

    return (
        <div className="card">
            <img className="card-img-top" src="https://picsum.photos/200/200" alt={4324} />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{gia}</p>
            </div>
        </div>
    )
}
