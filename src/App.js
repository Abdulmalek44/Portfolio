import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom'
import Pages from './Pages/Pages';
import WorkData from './Data/WorkData';



function App() {
  return (
    <>
      <Routes>
        <Route path='/Portfolio' element={<Home />} />
        {
          WorkData.map(page =>
            <Route
              key={page}
              path={page.path}
              element={<Pages content={page} />} />
          )
        }
      </Routes>
    </>
  );
}

export default App;

