import "./App.css";
import Header from "./components/Header/Header";
import SignUp from "./components/Auth/SignUp/SignUp";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SignUp />
      </div>
    </>
  );
}

export default App;
