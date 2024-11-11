import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Thing from './Thing';
import CreateThing from './CreateThing';
import EditThing from './EditThing';

function App() {
  return (
    <div className="App">
        <BrowserRouter future={{
    v7_relativeSplatPath: true,
    v7_startTransition: true
  }}>
        <Routes>
          <Route path="/" element={<Thing />}></Route>
          <Route path='/create' element={<CreateThing />}></Route>
          <Route path='/edit/:id' element={<EditThing />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
