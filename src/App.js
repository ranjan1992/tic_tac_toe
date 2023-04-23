import Icon from './components/Icon'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'

const itemArray = new Array(9).fill('empty')
const App = () => {
  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState('')

  // Reloading the Game
  const reloadGame = () => {
    setIsCross(false)
    setWinMessage('')
    itemArray.fill('empty', 0, 9)
  }

  //Check the Winner
  const checkIsWinner = () => {}

  //change the Item if there is no Item present
  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: 'success' })
    }
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'cirle'
      setIsCross(!isCross)
    } else {
      return toast('Already filled !', { type: 'error' })
    }

    checkIsWinner()
  }
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the Game !
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? 'Cross' : 'Circle'} turn
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
