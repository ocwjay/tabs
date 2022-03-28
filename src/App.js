import React, {useState} from 'react';
import './App.css';
import TabContent from './components/TabContent';
import Tabs from './components/Tabs';

function App() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="App">
      <Tabs selected={selected} setSelected={setSelected} />
      <TabContent selected={selected} />
    </div>
  );
}

export default App;
