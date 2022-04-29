import React, { useEffect } from 'react';
import "../../styles/modaloverlay/modaloverlay.css"

const ModalOverlay = ({ onHandleDisplay, onDisplay, switchCrtl }) => {
    useEffect(()=> {
        document.body.style.overflowY = onDisplay ? 'hidden' : 'scroll';
    }, [onDisplay])
    // console.log(switchCrtl);
    return (
        <div onClickCapture={()=>onHandleDisplay(switchCrtl)} className="modal-overlay" style={{display: onDisplay && "block"}}>
        </div>
    );
};

export default ModalOverlay;