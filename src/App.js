import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import getReviews from "./reviewFetcher";
import WordCloud from "./WordCloud";

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

function App() {
  const onClick = () => {
    console.log(gameTitle);
    getReviews(gameTitle, setWords);
    setGameTitle("");
  };
  const [gameTitle, setGameTitle] = useState("");
  const [words, setWords] = useState(null);

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
          <Form.Control
            value={gameTitle}
            placeholder="Game Title"
            style={styleForm}
          />
        </Form>
        <Button
          style={styleButton}
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          Generate
        </Button>
      </div>
      <WordCloud words={words} />
    </div>
  );
}

export default App;
