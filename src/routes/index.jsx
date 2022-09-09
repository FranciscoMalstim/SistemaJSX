import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';

export default function RoutesFilter(){
  return(
    <Routes>
      <Route  path="/" element={<SignIn />}/>
      <Route  path="/register" element={<SignUp />}/>

      <Route path='/dashboard' element={<Dashboard />} isPrivate/>
    </Routes>
  )
}