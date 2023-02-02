import React from "react";
import s from "../SmilesArea/SmilesArea.module.css";

const RecentSmilesArea = (props) => {

    let insertSmile = (symbol) => {
        document.getElementById('textAreaId').value += symbol;
    }

    return(
        <div>
            <div className={s.titleText}>
                Недавние
            </div>
            <div>
                {props.recentSmiles.map(smile => <button className={s.smileBtn} key={smile} onClick={(e) => insertSmile(smile)}>{smile}</button>)}
            </div>
        </div>
    )
}

export default RecentSmilesArea