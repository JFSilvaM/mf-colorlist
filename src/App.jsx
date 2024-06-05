import ReactDOM from "react-dom/client";
import ColorList from "./components/ColorList";
import "./index.css";

const App = () => {
  return (
    <>
      <ColorList colorList={[]} />
      <ColorList colorList={["#420fd2", "#df329c", "#0ed836"]} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
