import "./styles.css";
import Checker from "./Checker";

export default function App() {
  let pattern = [];

  for (var i = 0; i < 8; i++) {
    let row = [];
    for (var j = 0; j < 8; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) row.push(<Checker color="white" />);
        else row.push(<Checker color="black" />);
      } else {
        if (j % 2 !== 0) row.push(<Checker color="white" />);
        else row.push(<Checker color="black" />);
      }
    }
    pattern.push(<div className="wrapper">{row}</div>);
  }

  return (
    <div className="App">
      <h2>Chessboard</h2>
      <div className="board">
        <div>{pattern}</div>
      </div>
    </div>
  );
}
