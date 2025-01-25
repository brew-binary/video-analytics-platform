import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import ImageConverter from './Components/ImageConverter';
import VideoFormatter from './Components/VideoFormatter';
import PrivacyPolicy from './Components/PrivacyPolicy';
import VideoToTxtConverter from './Components/VideoToTxtConverter';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ImageFormatter" element={<ImageConverter/>}/>
        <Route path="/VideoFormatter" element={<VideoFormatter/>}/>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
        <Route path="/VideoToTxtConverter" element={<VideoToTxtConverter/>} />
    </Routes>
    </>
  );
}

export default App;
