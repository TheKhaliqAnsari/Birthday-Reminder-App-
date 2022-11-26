import './App.css';
import List from './Components/List'
import data from './Components/data';
import React, {useState} from 'react';

function App() {

  const [listData, setListData] = useState(data);

  return (
    <div className="App">
      <h1>{listData.length} Upcoming birthday</h1>
      {
        listData.map((person) => {
          return <List img={person.image} name={person.name} dob={person.dob} />
        })
      }
     
      <button onClick={() => setListData([])}>Clear birthday</button>
    </div>
  );
}

export default App;
