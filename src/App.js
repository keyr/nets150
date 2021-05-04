import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Button, Card, Form } from "react-bootstrap";

const style = {
  margin: '10px',
  width: '700px'
}

const styleForm = {
  width: '700px'
}

const styleButton = {
  width: '700px',
  background: '#35363a',
  border: '#35363a'
}

const generateCloud = (gameTitle) => {
  console.log(gameTitle)
}

function App() {
  const [gameTitle, setGameTitle] = useState("")

  return (
    <div style={style}>
      <div>
        <Card>
          <Card.Body>Welcome. Just input a game title and we'll generate a word cloud using its Steam reviews!</Card.Body>
        </Card>
        <Form
          onChange={e => setGameTitle(e.target.value)}>
          <Form.Control placeholder='Game Title' style={styleForm} />
        </Form>
        <Button
          style={styleButton}
          onClick={e => { e.preventDefault(); generateCloud(gameTitle) }}>
          Generate
        </Button>
      </div>
      <div>

      </div>
    </div>
  )
}

export default App