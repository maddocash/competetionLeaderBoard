import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Page = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)
ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
