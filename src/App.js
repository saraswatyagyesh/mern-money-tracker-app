
import './App.css';

function App() {
  return (


      <main>
        <h1>$400<span>.00</span></h1>
        
        <form>
            <div className="basic">
              <input type="text" placeholder={'+200 new samsung TV'}></input>
              <input type="datetime-local"></input>
            </div>
            
            <div className="description">
              <input type="text" placeholder={'description'}></input>
            </div>

            <button type="submit">Add new transaction</button>
          </form>

      <div className="transactions">

        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung</div>
            <div className="Description">It was time for new TV</div>
          
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2024-12-27 13:31</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung</div>
            <div className="Description">Someone ordered this TV</div>
          
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2024-12-27 13:31</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung</div>
            <div className="Description">Gig job for the website</div>
          
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
