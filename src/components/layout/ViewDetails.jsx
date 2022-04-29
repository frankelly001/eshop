import React from 'react';
import ModalOverlay from './ModalOverlay';

const ViewDetails = ({ children, detailType, viewSwitch, onHandleView, label }) => {
    return (
        <>
          <ModalOverlay onHandleDisplay={onHandleView} onDisplay={viewSwitch} switchCrtl={detailType} />
            <div className="view_details" style={{display: viewSwitch && "block"}}>
              <div className="view_header">
                <h3>{label}</h3>
                <i onClick={()=>onHandleView(detailType)} className="fa-solid fa-times"></i>
              </div>

              { children }

            </div>
        </>
    );
};

export default ViewDetails;