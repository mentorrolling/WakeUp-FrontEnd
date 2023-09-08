import React from "react"
import "./Home.css"
import { Row, Col } from "react-bootstrap";
import logo from "../../../assets/Screenshot_149-removebg-preview.png"


function Home() {


  return (
    <div>
      <div className="header-container">
        <Row>
          <Col><h1 className="title">WakeUp! Coffee </h1></Col>
          <Col> <img src="../../../img/001.jpg" alt="cafe" /></Col>
        </Row>
      </div>
      <div className="col m-3 col-0">
        <Row>
          <Col> <img src={logo} alt="taza de cafe" /> </Col>
          <Col> <h4>Somos una empresa de cafe gourmet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, doloribus commodi molestias fuga cum illo vero, suscipit explicabo harum iste corporis deleniti similique voluptatum dicta ullam vitae, excepturi nostrum et.</h4>
         </Col>
        </Row>

      </div>
      <br />
      <br />
      <div>
        <Row>
          <Col><h5>El cafe mas elegido de la semana Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione voluptates atque obcaecati delectus quos, et dolorum tenetur non quis, molestiae porro facere minus vero, quasi magni! Modi, eligendi est!</h5></Col>
          <Col><img src="../../../img/how-to-make-a-macchiato-003s.webp" alt="cafe elegido" /></Col>
        </Row>
        
      </div>
      <br />
      <div className="menu-color">
        <Row>
          <Col><h2 className="text-center">Menu</h2></Col>
        </Row>
        <Row>
          <Col className="centrado"><img src="../../../img/how-to-make-a-macchiato-003s.webp" alt="img" />
          <h3>Americano</h3>
          <p>csdsdfds</p>
          <p className="price">{20}</p>
          </Col>
          <Col className="centrado"><img src="../../../img/how-to-make-a-macchiato-003s.webp" alt="img" />
          <h3>Americano</h3>
          <p>csdsdfds</p>
          <p className="price">{20}</p>
          </Col>
        </Row>
        <Row>
          <Col className="centrado"><img src="../../../img/how-to-make-a-macchiato-003s.webp" alt="img" />
          <h3>Americano</h3>
          <p>csdsdfds</p>
          <p className="price">{20}</p>
          </Col>
          <Col className="centrado"><img src="../../../img/how-to-make-a-macchiato-003s.webp" alt="img" />
          <h3>Americano</h3>
          <p>csdsdfds</p>
          <p className="price">{20}</p>
          </Col>
        </Row>
        <Row>
          <Col className="centrado"><img src="../../../img/how-to-make-a-macchiato-003s.webp" alt="img" />
          <h3>Americano</h3>
          <p>csdsdfds</p>
          <p className="price">{20}</p>
          </Col>
          <Col className="centrado"><img src="../../../img/how-to-make-a-macchiato-003s.webp" alt="img" />
          <h3>Americano</h3>
          <p>csdsdfds</p>
          <p className="price">{20}</p>
          </Col>
        </Row>
      </div>

    </div>
  )
}
export default Home


