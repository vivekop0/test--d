// App.tsx or App.jsx

import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import { ContactUs } from './pages/ContactUs';







function App() {
  return (
    <Router>
     
      

      <Routes>
      
        <Route path="/" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
