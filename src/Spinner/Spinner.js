import React from 'react';

import { PacmanLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <PacmanLoader color={'#D7022B'} />
    </div>
  );
};

export default Spinner;
