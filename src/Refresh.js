//Refresh (New) Button

import React from 'react';

function Refresh() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div>
      <button onClick={refreshPage} className="refresh-button">New</button>
    </div>
  );
}

export default Refresh;