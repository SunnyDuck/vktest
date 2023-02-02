import React from "react";
import s from './SmileChangeSideBar.module.css'
const SmileChangeSideBar = (props) => {

    let switchSmiles = () => {
        if(document.getElementById('allSmiles').style.backgroundColor === 'white'){
            document.getElementById('allSmiles').style.backgroundColor = 'rgb(235,236,238)';
            document.getElementById("allSmilesBtn").disabled = false;
            document.getElementById("allSmilesBtn").style.cursor = 'pointer';
            document.getElementById('recSmiles').style.backgroundColor = 'white';
            document.getElementById("recSmilesBtn").disabled = true;
            document.getElementById("recSmilesBtn").style.cursor = 'not-allowed';
            document.getElementById('smileBox').style.display = 'none';
            document.getElementById('recentSmileBox').style.display = 'block';
        }
        else{
            document.getElementById('allSmiles').style.backgroundColor = 'white';
            document.getElementById("allSmilesBtn").disabled = true;
            document.getElementById("allSmilesBtn").style.cursor = 'not-allowed';
            document.getElementById('recSmiles').style.backgroundColor = 'rgb(235,236,238)';
            document.getElementById("recSmilesBtn").disabled = false;
            document.getElementById("recSmilesBtn").style.cursor = 'pointer';
            document.getElementById('smileBox').style.display = 'block';
            document.getElementById('recentSmileBox').style.display = 'none';
        }
    }

    return(
        <div className={s.smilesChangeSidebar}>
            <div className={s.smileActivateBtnWrapper} id='allSmiles'>
                <button className={s.smileActivateBtn} onClick={switchSmiles} id='allSmilesBtn'></button>
            </div>
            <div className={s.recentSmilesBtnWrapper} id='recSmiles'>
                <button className={s.recentSmilesBtn} onClick={switchSmiles} id='recSmilesBtn'></button>
            </div>
        </div>
    )
}

export default SmileChangeSideBar