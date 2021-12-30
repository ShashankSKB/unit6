import logo from './logo.svg';
import './App.css';
import { SearchInput } from './components/searchBar';
import { useState } from 'react';
import { Modal } from './components/modal';
function App() {

  const [showModal,setShowModal]=useState(false);
  const [choice,setChoice]=useState("");
  return (
    <div className="App">
      <SearchInput setShowModal={setShowModal} setChoice={setChoice} choice={choice} ></SearchInput>
      <Modal setShowModal={setShowModal} showModal={showModal} choice={choice}></Modal>
    </div>
  );
}

export default App;
