import React from 'react';

const ButtonImg = ({src, name, surname, setButtonFilter, styles}) => {

    const selectValue = (event, selected) => {
        
        setButtonFilter(selected);
    }

    return(
        <div className="btnImg" style={styles}>
            <button key={"btn"+name} id={name} onClick={(event) => selectValue(event, name)} style={{
                padding: "4%", 
                width: "100%",
                height: "inherit", 
                outline: "none", 
                border: "none", 
                backgroundColor: "white", 
                cursor: "pointer",
                fontSize: "11px"}}>
                <img style={{marginBottom: "3%"}} key={"img"+name} alt={name} src= {src}></img><br/>
                <span>{name}</span><br></br>
                <span>{surname}</span>
            </button>
        </div>
    )

}

export default ButtonImg;