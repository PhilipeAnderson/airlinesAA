import React from 'react';
import ReactDOM from 'react-dom';
//import { createServer } from 'miragejs';
import App from './App';
import { AuthProvider } from './provider/auth';

// createServer({
//   routes(){
//     this.namespace = 'api';
//     this.get('/orders', () => {
//       return [
//         {
//           id: 1,
//           title: 'Hello',
//           type: 'Deposit',
//           country: 'Estonia'
//         }
//       ]
//     });
//   }
// })

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
