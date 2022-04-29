import React from 'react';
import '../../styles/RenderLoader/renderloader.css'

const RenderLoader = ({ allData }) => {
  // if (allData.length < 1) document.body.style.overflow = 'hidden';
  // else document.body.style.overflow = 'unset';

    return (
      <>
        {allData.length > 0 ? (
          <div></div>
        ) : (
          <div className="loader">
            <div className="loader_icon">
              <i className="fa-solid fa-spinner" />
            </div>
          </div>
        )}
      </>
    );
};

export default RenderLoader;