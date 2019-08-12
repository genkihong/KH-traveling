import React from 'react';


const Options = ({dropMenu}) => {

  return(
    <>
      {
        dropMenu.map((zone) => {
            return (<option key={zone} value={zone}>{zone}</option>);
        })
      };
    </>
  );
}

export default Options;