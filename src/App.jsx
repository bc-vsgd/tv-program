import "./App.css";
import showsData from "./assets/json/shows.json";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";

function App() {
  return (
    <>
      <Header />
      <Main data={showsData} />
    </>
  );
}

export default App;
