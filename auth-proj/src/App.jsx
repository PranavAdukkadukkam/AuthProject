
import Signup from '../Components/Signup/Signup'
import Signin from '../Components/Signin/Signin'
import './App.css'
import {Router,Routes,Route , Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to={'/signup'}>Signup</Link>
      <Link to={'/signin'}>Signin</Link>
    </div>
  )
}
function App() {

  return (
    <div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Signin/>}/>
        </Routes>  

      
    </div>
  )
}

export default App
