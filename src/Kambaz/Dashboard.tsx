import { Link } from "react-router-dom";
import {Row, Col, Card, Button} from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
 <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
 <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
 <div id="wd-dashboard-courses">
  <Row xs={1} md={2} lg={4} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "260px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/fullstack.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "260px" }}> 
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/c.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">Intro to C Programming</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        C developer</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "260px" }}> 
   <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/python.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">Intro to AI</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        AI/ML developer</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
    </Col>
    <Col className="wd-dashboard-course" style={{ width: "260px" }}> 
   <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/db.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">Intro to Databases</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Intro to Databases</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
    </Col>
    <Col className="wd-dashboard-course" style={{ width: "260px" }}> 
   <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/java.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">Intro to Java</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Intro to Java</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
    </Col>
    <Col className="wd-dashboard-course" style={{ width: "260px" }}> 
   <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/math.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">Intro to Linear Algebra</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Intro to Linear Algebra</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
    </Col>
    <Col className="wd-dashboard-course" style={{ width: "260px" }}> 
   <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/english.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">English 1 </Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        First Year English</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
    </Col>
    <Col className="wd-dashboard-course" style={{ width: "260px" }}> 
   <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/arch.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">Intro to Computer Architecture</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Intro to Computer Arch</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
    </Col>
  </Row>
</div></div>

);}
