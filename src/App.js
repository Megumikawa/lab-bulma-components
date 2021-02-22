import React from 'react';
import Navbar from './navbar/navbar.js'
import FormField from './formfield/FormField.js'
import CoolButton from './coolbutton/CoolButton.js'

import 'bulma/css/bulma.css'
import './navbar/Navbar.css'


const App = () => {
  return (
    <div>
      <Navbar />
      <FormField />
      <CoolButton />
    </div>
  )
};

export default App;
