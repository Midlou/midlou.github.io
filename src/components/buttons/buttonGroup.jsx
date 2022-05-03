import React from "react";

const ButtonGroup = ({ children = null }) => {
    return <div className={`btn-group`}>
        {children}
    </div>
}

export default ButtonGroup;
