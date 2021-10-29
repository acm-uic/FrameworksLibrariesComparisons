import React from 'react';

const CardContent = (props) => {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.user.fname} {props.user.lname}</h5>
            <p className="card-text d-inline-block">{props.user.id}</p>
            <p className="card-text float-right">{props.user.email}</p>
        </div>
    );
}

export default CardContent;