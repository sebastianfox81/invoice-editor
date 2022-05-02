import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App.js'
import { AppProvider } from './context.js'

ReactDOM.render(<AppProvider><App /></AppProvider>, document.getElementById('root'));



