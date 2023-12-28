import { useState } from 'react';
import * as Prime from './config/Config';

function App() {
  return (
    <>
      <div className='card flex flex-column align-items-center  justify-content-center'>
        <h1>Router Demo Project</h1>
        <Prime.Button label='Check' icon='pi pi-check' />
      </div>
    </>
  );
}

export default App;
