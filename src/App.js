import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [datetime, setDatetime] = useState('');

  function addNewTransaction(ev) {
    ev.preventDefault(); // to prevent the page from refreshing 
    const url = process.env.REACT_APP_API_URL;
    console.log(url);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        datetime
      })
    }).then(res => res.json().then(json => console.log('result', json)));
  }

  return (
    <main>
      <h1>$400<span>.00</span></h1>
      
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text" 
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder={'+200 new samsung TV'} />
          
          <input value={datetime}
            onChange={ev => setDatetime(ev.target.value)}
            type="datetime-local" />
        </div>
        
        <div className="description">
          <input type="text" 
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder={'description'} />
        </div>

        <button type="submit">Add new transaction</button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2024-12-27 13:31</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung</div>
            <div className="description">Someone ordered this TV</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2024-12-27 13:31</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung</div>
            <div className="description">Gig job for the website</div>
          </div>
          <div className="right">
            <div className="price red">-$900</div>
            <div className="datetime">2024-12-27 13:31</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
