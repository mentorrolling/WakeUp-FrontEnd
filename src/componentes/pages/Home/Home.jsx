import React from "react"
import "./Home.css"
import { Row, Col, Button, Card, CardImg } from "react-bootstrap";
import logo from "../../../assets/Screenshot_149-removebg-preview.png"
import Navbar from "../../layout/NavBar/NavBar"
import fotocard1 from "../../../assets/how-to-make-a-macchiato-003s.webp"
import horadelte from '../../../assets/Té negro para todos los días.jpg'
import empresa from "../../../assets/empresa.jpg"
import juice from "../../../assets/Springtime_lemonade_flavors-removebg-preview.png"


function Home() {


  return (
  
    <div>
      <Navbar/>
      <div className="principal">
        <Row>
          <Col>
            <img className="logoedit" src={logo} alt="logo" />
          </Col>
        </Row>
        <h1>WakeUp! Coffee</h1>
      </div>
      <br />
      <div className="empresa">
        <Row>
          <Col md={6}>
            <img className="imgempresa" src={empresa} alt="empresa" />
         </Col>
         <Col md={6}>
            <h3>Nuestra historia</h3>
            <h5>
         En el año 1980, nacía oficialmente nuestra empresa de café. Comenzamos con un modesto local, donde cada taza de café se preparaba con cuidado y amor. Nuestra misión era simple pero poderosa: servir la mejor taza de café que nuestros clientes hubieran probado jamás.
         <br />
         Hoy, WakeUp!  se enorgullece de seguir sirviendo tazas de café excepcionales. Nuestro legado continúa, y cada día es una oportunidad para compartir la pasión por el café con más personas, inspirando momentos especiales y creando recuerdos que perdurarán.
          </h5>
        </Col>
       </Row>
      </div>
      <br />
      <br />
     <div className="juiceserie">
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
        <img  className="juice" src={juice} alt="seriejugos" />
        </Col>
        <Col md={6} className="txtjuice ">
          <h3>Juice series</h3>
          <p className="parrafo">Proba nuestra linea de jugos edicion limitada</p>
        </Col>
      </Row>
    </div>
      <div className="contenedorte">
        <Row className="horadelte">
          <Col md={8} >
           <h2 className="t">It’s time for Tea.</h2>
           <h5 className="txtht">Todo el mundo tiene una taza de buen té en el corazón.
             Una tarde tranquila, la temperatura del sol brillando y la suave brisa,
             la risa de un amante y la dulzura permaneciendo en tu boca.
             No es fácil recordar una taza de té, pero la sensación y el regusto
             del primer sorbo del té de WakeUp! permanecerán durante mucho tiempo. La satisfacción que se esparce suavemente en tu corazón junto con las bebidas en WakeUp!.</h5>
           </Col>
          <Col md={4} >
            <img className="techai" src={horadelte} alt="te chai" />
          </Col>
        </Row>
      </div>
      <br />
      <div className="menu-color">
      <Row>
         <Col>
          <h2 className="text-center">Menu</h2>
        </Col>
      </Row>
      <br />
      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around colordelcuerpo">
      
        <Card className="colorcard" style={{ width: '18rem' }}>
          <Card.Body className="color">
            <CardImg src={fotocard1} className="card-img-top"/>
              <Card.Title className="txtcol">Black Coffee</Card.Title>
               <Card.Subtitle className="pricecard" mb="2" text="muted">$800 </Card.Subtitle>
                <Card.Text className="text-center edit">  Some quick example text to build on the card title and make up the bulk of the card content.
              </Card.Text>
            <Button className="ordernow">Order Now</Button>
          </Card.Body>
       </Card>
      
       <Card className="colorcard" style={{ width: '18rem' }}>
         <Card.Body className="color">
          <CardImg src={fotocard1} className="card-img-top"/>
            <Card.Title className="txtcol">Black Coffee</Card.Title>
             <Card.Subtitle className="pricecard" mb="2" text="muted">$800 </Card.Subtitle>
             <Card.Text className="text-center edit">  Some quick example text to build on the card title and make up the bulk of the card content.
            </Card.Text>
          <Button className="ordernow">Order Now</Button>
        </Card.Body>
       </Card>
       <Card className="colorcard" style={{ width: '18rem' }}>
         <Card.Body className="color">
           <CardImg src={fotocard1} className="card-img-top"/>
             <Card.Title className="txtcol">Black Coffee</Card.Title>
             <Card.Subtitle className="pricecard" mb="2" text="muted">$800 </Card.Subtitle>
             <Card.Text className="text-center edit">  Some quick example text to build on the card title and make up the bulk of the card content.
            </Card.Text>
          <Button className="ordernow">Order Now</Button>
         </Card.Body>
       </Card>

       <Card className="colorcard" style={{ width: '18rem' }}>
         <Card.Body className="color">
          <CardImg src={fotocard1} className="card-img-top"/>
            <Card.Title className="txtcol">Black Coffee</Card.Title>
            <Card.Subtitle className="pricecard" mb="2" text="muted">$800 </Card.Subtitle>
            <Card.Text className="text-center edit">  Some quick example text to build on the card title and make up the bulk of the card content.
            </Card.Text>
           <Button className="ordernow">Order Now</Button>
         </Card.Body>
       </Card>
      <Row>
        <Button className="vermas"><a href="/Menu">Ver mas</a></Button>
      </Row>
      </div>
     </div>
    </div>
  )
}
export default Home
