import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './layouts/MainLayout.jsx'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<MainLayout />, document.getElementById('root'));
registerServiceWorker();
