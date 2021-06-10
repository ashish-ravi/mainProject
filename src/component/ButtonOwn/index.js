import React from "react";

const Button = (props) => {
    return(
        <span style={props.containerStyle}>
            <button 
                style={props.style} 
                onClick={() => {
                    props.onClick(props.label);
                }} 
            >
                    {props.label}
            </button>
        </span>
    );
};

export default Button;

