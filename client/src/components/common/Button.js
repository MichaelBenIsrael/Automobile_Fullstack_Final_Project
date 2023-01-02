import React from "react";

const Button = ({className, content, callback}) => {
    return <button className={className} onClick={() => callback()}>{content}</button>
}

export default Button;