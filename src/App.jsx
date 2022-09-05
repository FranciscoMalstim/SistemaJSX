import firebaseConfig from './services/firebaseConnection';

import { BrowserRouter } from 'react-router-dom';
import RoutesFilter from './routes';

function App() {
 
  return (
   <BrowserRouter>
    <RoutesFilter />
   </BrowserRouter>
  )
}

export default App
