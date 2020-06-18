import React from "react";

function Card(props) {
    return (
        <div>
            {props.list.map(item => (
                <div className="col s12 m6">
                    <div className="card medium blue lighten-5" key={item.id}>
                        <div className="card-image">
                            <a href={item.appLink}><img src={item.image} alt="screenshot of project" /></a>
                        </div>
                        <div className="card-content">
                            <span style={{ color: "#4a148c" }} className="card-title">{item.title}</span>
                            <p>{item.description}</p>
                        </div>
                        <div className="card-action">
                            <a href={item.github} style={{ color: "#4a148c" }}>Github Link</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;