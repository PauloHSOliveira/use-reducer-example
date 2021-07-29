import React from 'react';
import {FormFC} from './components/form'

import './App.css'

function App() {
  return (
    <div className="container" style={{height:'100vh', width:'100wh', backgroundColor:'#000', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <div className="content" style={{backgroundColor:'#fff', borderRadius:'4px', height:'auto', width:'400px', padding:'15px'}}>
        <FormFC />
      </div>
    </div>
    );
}

export default App;
