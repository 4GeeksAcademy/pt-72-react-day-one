import React from 'react'

export default function Card(props) {
    return (
        <div className="card mx-auto my-2" style={{ width: "30rem" }}>
            <h5 className="card-title d-flex justify-content-between p-3">
                {props.title}
                <span>{props.date}</span>
            </h5>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="icons d-flex justify-content-between mb-2">
                    <div className="left d-flex justify-content-around w-25">
                        <i className="fa fa-solid fa-heart"></i>
                        <i class="fa fa-regular fa-paper-plane"></i>
                        <i class="fa fa-regular fa-comment"></i>
                    </div>
                    <i class="fa fa-solid fa-bookmark"></i>
                </div>
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
    )
}
