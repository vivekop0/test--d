// App.tsx or App.jsx

import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import { ContactUs } from './pages/ContactUs';







function App() {
  return (

    <Router>
     <h1>
      <Link to={'/contact'}>Go to contact page</Link>
     </h1>
      

      <Routes>
      
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
