import React from 'react';

const Button = ({label, func, styles}) => {

    const doFunction = () => {
        func();
    }

    return(
        <button key={"btn"+label} className="boton" onClick={(event) => doFunction(event)} 
        style={styles}>
            {label}
        </button>
    )

}

export default Button;