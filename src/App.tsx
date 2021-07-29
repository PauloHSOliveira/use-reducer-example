import React from 'react';
import {FormFC} from './components/form'
import {container_styles,content_styles} from './GlobalStyles'

import './App.css'

function App() {
  return (
    <div className="container" style={container_styles}>
      <div className="content" style={content_styles}>
        <FormFC />
      </div>
    </div>
    );
}

export default App;
