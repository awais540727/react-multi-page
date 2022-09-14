import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './nav/Nav';
import Home from './components/Home';
// import Create from './components/Create';
import Update from './components/Update';
// import Delete from './components/Delete';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            {/* <Route path="delete" element={<Delete />} />
            <Route path="create" element={<Create />} /> */}
            <Route path="update/:id" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
