import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './layouts/MainLayout.jsx'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(<MainLayout />, document.getElementById('root'));
registerServiceWorker();
