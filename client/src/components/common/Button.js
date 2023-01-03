import React from "react";

const Button = ({ className, content, onClickCallback }) => {
    return <button className={className} onClick={() => onClickCallback()}>{content}</button>
}

export default Button;