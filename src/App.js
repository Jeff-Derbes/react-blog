import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './create';
import BlogDetails from './blogDetails';
import NotFound from './NotFound';

function App() {
  const title = 'Welcome to the new blog!'

  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Routes>
          <Route path='*' element={<NotFound/>}/>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<Create/>}/>
          <Route path="/blogs/:id" element={<BlogDetails/>} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
