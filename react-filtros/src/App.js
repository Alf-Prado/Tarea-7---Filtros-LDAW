import React, {useState} from 'react';
import './App.css';

import ButtonFilter from './components/filter/ButtonFilter';
import RangeFilter from './components/filter/RangeFilter';
import Button from './components/filter/Button';

const {useRef} = React;

function App() {
  const [forma, setForma] = useState([
    {name: "REDONDO", surname: "", src: require('./images/Forma/redondo.png')},
    {name: "PRINCESA", surname: "", src: require('./images/Forma/princesa.png')},
    {name: "ESMERALDA", surname: "", src: require('./images/Forma/esmeralda.png')},
    {name: "ÓVALO", surname: "", src: require('./images/Forma/ovalo.png')},
    {name: "MARQUESA", surname: "", src: require('./images/Forma/marquesa.png')},
    {name: "PERA", surname: "", src: require('./images/Forma/pera.png')},
    {name: "ASSCHER", surname: "", src: require('./images/Forma/asscher.png')},
    {name: "CORAZÓN", surname: "", src: require('./images/Forma/corazon.png')},
    {name: "COJÍN", surname: "", src: require('./images/Forma/cojijn.png')},
    {name: "BAGUETTE", surname: "", src: require('./images/Forma/baguette.png')},
    {name: "TRILLÓN", surname: "", src: require('./images/Forma/trillon.png')},
    {name: "RADIANTE", surname: "", src: require('./images/Forma/radiante.png')}
  ])

  const [corte, setCorte] = useState([
    {name: "EXCELENTE", surname: "(MÁXIMO BRILLO)", src: require('./images/Corte/excelente.png')},
    {name: "MUY BUENO", surname: "(MUY BRILLANTE)", src: require('./images/Corte/muy-bueno.png')},
    {name: "BUENO", surname: "(BRILLANTE)", src: require('./images/Corte/bueno.png')},
    {name: "REGULAR", surname: "(POCO BRILLANTE)", src: require('./images/Corte/regular.png')}
  ])

  const [color, setColor] = useState([
    {name: "TRANSPARENTE", surname: "", src: require('./images/Color/incoloro.png')},
    {name: "CASI INCOLORO", surname: "", src: require('./images/Color/casi-incoloro.png')},
    {name: "LIGERAMENTE AMARILLO", surname: "", src: require('./images/Color/ligeramente-amarillo.png')},
    {name: "AMARILLO CLARO", surname: "", src: require('./images/Color/amarillo-claro.png')}
  ])

  const [claridad, setClaridad] = useState([
    {name: "PERFECTA", surname: "", src: require('./images/Claridad/perfecta.png')},
    {name: "IMPERFECCIONES", surname: "NO VISIBLES", src: require('./images/Claridad/imperfecciones-no-visibles.png')},
    {name: "IMPERFECCIONES", surname: "VISIBLES A 10X", src: require('./images/Claridad/imperfecciones-10x.png')},
    {name: "IMPERFECCIONES", surname: "VISIBLES A SIMPLE VISTA", src: require('./images/Claridad/imperfecciones-simple-vista.png')}
  ])

  const [quilataje, setQuilataje] = useState({
    title: "QUILATAJE",
    from: 0, 
    to: 30,
    srcFrom: require('./images/Quilataje/pequeno.png'),
    srcTo: require('./images/Quilataje/grande.png'),
    prefijo: ""
  })

  const [precio, setPrecio] = useState({
    title: "PRECIO",
    from: 1000, 
    to: 5000000,
    srcFrom: "",
    srcTo: "",
    prefijo: "$"
  })

  const [filter, setFilter] = useState({
    forma: "",
    color: "",
    claridad: "",
    corte: "",
    quilatajeMin: 0,
    quilatajeMax: 30,
    precioMin: 1000,
    precioMax: 5000000
  })

  const setFilterForma = (forma) => {
    filter.forma = forma;
  }

  const setFilterColor = (color) => {
    filter.color = color;
  }

  const setFilterClaridad = (claridad) => {
    filter.claridad = claridad;
  }

  const setFilterCorte = (corte) => {
    filter.corte = corte;
  }

  const setFilterQuilataje= (min, max) => {
    filter.quilatajeMin = min;
    filter.quilatajeMax = max;
  }

  const setFilterPrecio = (min, max) => {
    filter.precioMin = min;
    filter.precioMax = max;
  }

  const buscar = () => {
    console.log("Se escogieron los siguientes filtros (JSON): ");
    console.log(JSON.stringify(filter));
    console.log("Se escogieron los siguientes filtros: ");
    console.log("Forma: " + filter.forma);
    console.log("Color: " + filter.color);
    console.log("Claridad: " + filter.claridad);
    console.log("Corte: " + filter.corte);
    console.log("Quilataje mínimo: " + filter.quilatajeMin);
    console.log("Quilataje máximo: " + filter.quilatajeMax);
    console.log("Precio mínimo: " + filter.precioMin);
    console.log("Precio máximo: " + filter.precioMax);
  }

  const childQ = useRef();
  const childP = useRef();

  const limpiar = () =>{
    if(filter.forma !== ""){
      document.getElementById(filter.forma).style.backgroundColor = "white";
      filter.forma = "";
    }

    if(filter.color !== ""){
      document.getElementById(filter.color).style.backgroundColor = "white";
      filter.color = "";
    }
    
    if(filter.claridad !== ""){
      document.getElementById(filter.claridad).style.backgroundColor = "white";
      filter.claridad = "";
    }

    if(filter.corte !== ""){
      document.getElementById(filter.corte).style.backgroundColor = "white";
      filter.corte = "";
    }
    
    childQ.current.resetFilter();
    filter.quilatajeMin = 0;
    filter.quilatajeMax = 30;

    childP.current.resetFilter();
    filter.precioMin = 1000;
    filter.precioMax = 5000000;
  }

  const formaStyles = {
    width: "16%"
  }

  const imgStyles = {
    height: "inherit",
    width: "24%"
  }

  const buscarStyles = {
    backgroundColor: "#1724ab",
    color: "white" 
  }

  const limpiarStyles = {
    backgroundColor: "white",
    color: "#1724ab" 
  }
  

  return (
    <div className="App">
      <h1>Selecciona tu Joya</h1>
      <div style={{display: "flex"}}>
      <div style={{width: "48%", float: "left", margin: "1%"}}>
        <ButtonFilter title = {'FORMA'} buttons={forma} setFilter={setFilterForma} styles={formaStyles}></ButtonFilter>
        <ButtonFilter title = {'COLOR'} buttons={color} setFilter={setFilterColor} styles={imgStyles}></ButtonFilter>
        <ButtonFilter title = {'CLARIDAD'} buttons={claridad} setFilter={setFilterClaridad} styles={imgStyles}></ButtonFilter>
      </div>

      <div style={{width: "48%", float: "left", margin: "1%"}}>
        <ButtonFilter title = {'CORTE'} buttons={corte} setFilter={setFilterCorte} styles={imgStyles}></ButtonFilter>
        <RangeFilter ref={childQ} title = {quilataje.title} from = {quilataje.from} to = {quilataje.to} srcFrom = {quilataje.srcFrom} srcTo = {quilataje.srcTo} prefijo = {quilataje.prefijo} setFilter={setFilterQuilataje} step={1}></RangeFilter>
        <RangeFilter ref={childP} title = {precio.title} from = {precio.from} to = {precio.to} srcFrom = {precio.srcFrom} srcTo = {precio.srcTo} prefijo = {precio.prefijo} setFilter={setFilterPrecio} step={1000}></RangeFilter>
      </div>
      </div>

      <div className="btn-group" style={{width: "40%", margin: "2% auto", height: "40px"}}>
        <Button label={"BUSCAR"} func={buscar} styles={buscarStyles}></Button>
        <Button label={"LIMPIAR FILTROS"} func={limpiar} styles={limpiarStyles}></Button>
      </div>
      
    </div>
  );
}

export default App;
