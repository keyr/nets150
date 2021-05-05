import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import getReviews from "./reviewFetcher";

const style = {
  margin: "10px",
  width: "800px",
};

const styleForm = {
  width: "800px",
};

const styleButton = {
  width: "800px",
  background: "#35363a",
  border: "#35363a",
};

const generateCloud = (gameTitle) => {
  console.log(gameTitle);
};

function App() {
  getReviews("crusader");
  const [gameTitle, setGameTitle] = useState("");

  return (
    <div style={style}>
      <div>
        <Card>
          <Card.Body>
            Welcome. Just input a game title and we'll generate a word cloud
            using its most helpful Steam reviews!
          </Card.Body>
        </Card>
        <Form onChange={(e) => setGameTitle(e.target.value)}>
          <Form.Control placeholder="Game Title" style={styleForm} />
        </Form>
        <Button
          style={styleButton}
          onClick={(e) => {
            e.preventDefault();
            generateCloud(gameTitle);
          }}
        >
          Generate
        </Button>
      </div>
      <div></div>
    </div>
  );
}

export default App;

