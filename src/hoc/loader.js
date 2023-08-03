import React from 'react';

export const Loader = () => {
  return (
    // <div class="preloader">
    //     <div class="preloader-icon"></div>
    // </div>
    <div className="backdrop">
      <div className="loader-container">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <h3>Loading Please Wait!</h3>
    </div>
  );
};
