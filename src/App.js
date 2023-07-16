import "./App.css";
import office from "./2000people.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="block">
          <div className="text">{office[0].text}</div>
          <div className="image">
            <img src={`/assets/${office[0].id}.jpg`} alt="" />
            <img src="public/assets/5.jpg" alt="" />
            <img
              src="\assets\Nina_Uszkiewicz.png"
              alt="skinfinity"
              className="specialists__block__img _animItem"
            />
          </div>
        </div>
        <div className="block">
          <div className="text">{office[1].text}</div>
          <div className="image">
            <img src={`/assets/${office[1].id}.jpg`} alt="" />
          </div>
        </div>
        <div className="block">
          <div className="image">
            <img src={`/assets/${office[2].id}.jpg`} alt="" />
          </div>
          <div className="text">{office[2].text}</div>
        </div>
        <div className="block">
          <div className="image">
            <img src={`/assets/${office[3].id}.jpg`} alt="" />
          </div>
          <div className="text">{office[3].text}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
