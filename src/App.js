import "./App.css";
import Header from "./components/header/header";
import Chat from "./components/chat/chat";
import Roulette from "./components/roulette/roulette";
import Repository from "./components/repository/repository";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Chat />
        <Roulette />
        <Repository></Repository>
      </main>
    </div>
  );
}

export default App;
