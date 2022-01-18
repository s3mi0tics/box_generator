import logo from './logo.svg';
import './App.css';
import Form from './components/ComponentForm';
import DisplayBoxes from './components/ComponentDisplayBoxes';
import { useState } from 'react';

function App() {

  const [allBoxes, setAllBoxes] = useState([])

  const createBoxList = (boxColorSize) => {
    setAllBoxes([...allBoxes, boxColorSize])
    console.log(allBoxes)
  }

  return (
    <div>
      <Form createBoxList = {createBoxList}/>
      <DisplayBoxes allBoxes = {allBoxes}/>
    </div>
  );
}

export default App;
