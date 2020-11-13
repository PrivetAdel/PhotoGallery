import React, {useState} from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Modal from './Modal';

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="app">
      <Header />
      <Gallery setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  )
};

export default App;