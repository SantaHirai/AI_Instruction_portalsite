import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Basics } from './pages/Basics';
import { Cases } from './pages/Cases';
import { Tools } from './pages/Tools';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="basics" element={<Basics />} />
          <Route path="cases" element={<Cases />} />
          <Route path="tools" element={<Tools />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
