import React, { useState, useEffect, useImperativeHandle } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
const {forwardRef} = React;
//({title, from, to, srcFrom, srcTo, prefijo, setFilter}
const RangeFilter = forwardRef((props, ref) => {
    
    const selectRanges = () => {
        props.setFilter(values.min, values.max);
    }

    const [values, setValues] = useState({
        min: 0,
        max: 1
    })

    const [loading, setLoading] = useState(true);

    
    useImperativeHandle(ref, () => ({
        resetFilter(){
            setValues({
                min: props.from,
                max: props.to
            });
        }
        
    }));
        

    useEffect(() => {
        if(loading === true){
            setValues({
                min: props.from,
                max: props.to
            });
            setLoading(false);  
        }
    })


    return (
        <div style={{width: "92%",margin: "2%", float: "left"}}>
            <h4 style={{textAlign: "left"}}>{props.title}</h4>
            {props.srcFrom !== "" && (
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <img style={{maxHeight: "20px", marginTop: "20px"}} src= {props.srcFrom} alt=""></img>
                <img src= {props.srcTo} alt=""></img>
            </div>
            )}
            <br></br>
            <div>
            <InputRange
                step = {props.step}
                formatLabel={value => null}
                minValue = {props.from}
                maxValue = {props.to}
                allowSameValues={false}
                value = {values}
                onChange = {setValues}
                onChangeComplete = {selectRanges}
                
            />
            </div>
            <div style={{margin: "2% 0", display: "flex", justifyContent: "space-between"}}>
                <div>{`${props.prefijo}${values.min}`}</div>
                <div>{`${props.prefijo}${values.max}`}</div>
            </div>
        </div>
    )
})

export default RangeFilter;