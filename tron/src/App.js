import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CardComponent from "./components/Card";

import "./index.css";

function App() {
  return (
    <>
      <div className="cardContainer">
        <CardComponent cardTitle={"cardOne"} />
        <CardComponent cardTitle={"cardTwo"} />
        <CardComponent cardTitle={"cardThree"} />
      </div>
    </>
  );
}

export default App;
