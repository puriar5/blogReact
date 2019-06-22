import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css'
import Axios from 'axios'

Axios.defaults.baseURL = 'https://5d024bd99ce12c0014e0f50e.mockapi.io/api';

ReactDOM.render(<App />, document.getElementById('root'));
