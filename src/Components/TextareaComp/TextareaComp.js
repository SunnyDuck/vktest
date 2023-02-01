import React from "react";
import s from './TextareaComp.module.css'

const TextareaComp = (props) => {

    let handleKeyDown = (e) => {
        e.target.style.height = 'inherit';
        const height = e.target.scrollHeight;
        e.target.style.height = `${height}px`;
    }

    return(
        <div>
            <textarea onKeyDown={handleKeyDown} placeholder="Ваше сообщение" className={s.textareaWrapper} id='textAreaId' rows={1}/>
        </div>
    )
}

export default TextareaComp