import React from "react";
import './App.css';
import TextareaComp from "./Components/TextareaComp/TextareaComp";
import SmilesArea from "./Components/SmilesArea/SmilesArea";

const App = (props) => {

    let smiles = props.store.smiles.map( d=> <SmilesArea
        key = {d.title}
        title = {d.title}
        smiles = {d.items}
    />)

    let smileAreaVisibility = 'visible';

    let smileAreaOpacityChange = () => {
        smileAreaVisibility = (smileAreaVisibility === 'visible') ? 'hidden' : 'visible';
        document.getElementById('smilesArea').style.visibility = smileAreaVisibility;
    }

    return (

    <div className="App">
        <div>
            <div id='smilesArea'>
                <div className='smileBox'>
                    {smiles}
                </div>
                <div className='smilesChangeSidebar'>

                </div>
            </div>
            <div className='textArea'>
                <TextareaComp checkFunc={props.checkFunc}/>
                <button className='smileActivateBtn' onClick={smileAreaOpacityChange}></button>
            </div>
        </div>
    </div>
  );
}

export default App;
