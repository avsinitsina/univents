import "./App.css";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Auth />
      </div>
    </>
  );
}

export default App;
