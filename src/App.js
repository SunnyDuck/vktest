import React from "react";
import './App.css';
import TextareaComp from "./Components/TextareaComp/TextareaComp";
import SmilesArea from "./Components/SmilesArea/SmilesArea";
import SmileChangeSideBar from "./Components/SmilesChangeSaidbar/SmileChangeSideBar";
import RecentSmilesArea from "./Components/RecentSmilesArea/RecentSmilesArea";

const App = (props) => {

    let smiles = props.store.smiles.map( d=> <SmilesArea
        key = {d.title}
        title = {d.title}
        smiles = {d.items}
        recentSmiles = {props.recentSmilesAddFunc}
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
                <div id='smileBox'>
                    {smiles}
                </div>
                <div id='recentSmileBox'>
                    <RecentSmilesArea recentSmiles = {props.store.recentSmiles}/>
                </div>
                <SmileChangeSideBar/>
            </div>
            <div className='textArea'>
                <TextareaComp checkFunc={props.checkFunc}/>
                <div className='smileActivateBtnWrapper'>
                    <button className='smileActivateBtn' onClick={smileAreaOpacityChange}></button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
