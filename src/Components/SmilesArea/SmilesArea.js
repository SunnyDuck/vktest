import React from "react";
import s from './SmilesArea.module.css'
const SmilesArea = (props) => {

    let insertSmile = (symbol) => {
        props.recentSmiles(symbol);
        document.getElementById('textAreaId').value += symbol;
    }

    return(
        <div className={s.smilesWrapper}>
            <div className={s.titleText}>
                {props.title}
            </div>
            <div>
                {props.smiles.map(smile => <button className={s.smileBtn} key={smile} onClick={(e) => insertSmile(smile)}>{smile}</button>)}
            </div>
        </div>
    )
}

export default SmilesArea