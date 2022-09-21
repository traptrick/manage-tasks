import "./App.css";
import InputSection from "./pages/leftsection/InputSection";
import DisplaySection from "./pages/rightsection/DisplaySection";

function App() {
  return (
    <div className="App">
      <h1 className="heading"> 👨🏻‍💻 Manage Your Day To Day Tasks Easily 👩🏻‍💻 </h1>
      <div className="bottom">
        <div className="inputSection">
          <InputSection />
        </div>

        <div className="displaySection">
          <DisplaySection />
        </div>
      </div>
    </div>
  );
}

export default App;
