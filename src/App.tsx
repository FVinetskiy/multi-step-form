import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
import Step4 from './components/Step4/Step4';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Step1 />} />
          <Route path="/select-plan" element={<Step2 />} />
          <Route path="/add-ons" element={<Step3 />} />
          <Route path="/summary" element={<Step4 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
