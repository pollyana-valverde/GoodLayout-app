import './css/App.css';
import AuthProvider from "./provider/AuthProvider";

import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <Navbar />
    </AuthProvider>
  );
}

export default App;
