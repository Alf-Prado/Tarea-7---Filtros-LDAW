import React, { useState } from 'react';

import ButtonImg from './ButtonImg';

const ButtonFilter = ({title, buttons, setFilter, styles}) => {

    const [selected, setSelected] = useState("");

    const setButtonFilter = (value) => {
        if(selected !== ""){
            document.getElementById(selected).style.backgroundColor = "white";
        }
        setSelected(value);
        document.getElementById(value).style.backgroundColor = "aliceblue";
        setFilter(value);
    }

    return (
        <div className="btnFilter">
            <h4 style={{
                textAlign: "left"
                }}>
                    {title}</h4>
            <div className="btn-group" id={title} >
            {buttons.map((boton, i) => {
                return (
                    <ButtonImg key={"bI"+i} src = {boton.src} name = {boton.name} surname = {boton.surname} setButtonFilter={setButtonFilter} styles={styles}></ButtonImg>
                )
            })}
            </div>
        </div>
    )
}

export default ButtonFilter;