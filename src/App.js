// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from './Create';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/blog/:id" element={<BlogDetail/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
