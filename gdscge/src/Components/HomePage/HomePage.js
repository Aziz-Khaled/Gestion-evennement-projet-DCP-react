import React , { useEffect } from 'react'
import {Navbar  , Nav , Card  } from 'react-bootstrap'
import './HomePage.css'
import{ useDispatch } from 'react-redux';
import {displayingEvents} from '../../Redux/actions/actions'
import { useSelector } from 'react-redux';
import AdminPanel from '../HomePage/adminPanel'


function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayingEvents())
  } ,[])

  let eventList = useSelector((state) => state.contactReducer.events);
  let userIsAdmin = JSON.parse(localStorage.getItem('current_user'))
  console.log ("current member active" , userIsAdmin)


    return (
    <div>
  
  <Navbar bg="light" variant="light">
    <Navbar.Brand > GDSC Iset Nabeul</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link >Home</Nav.Link>
      <Nav.Link >Features</Nav.Link>
      <Nav.Link >Pricing</Nav.Link>
      <Nav.Link >{userIsAdmin?.role ==='admin' ? <AdminPanel/>  : console.log ("mahouch admin")}</Nav.Link>
    </Nav>
  </Navbar>
  
<div className="homePageContainer">
   <div className = "paragraph" >
    <h1 className ="gdsc" style ={{display : "flex" , justifyContent : "space-between"}} >  
    <span className ="gdsc"style ={{color: "#4285F4"}}>Google</span>
    <span  className ="gdsc" style ={{color: "#34A853"}}>Developer</span> 
     <span className ="gdsc"style ={{color: "#FBBC05"}}>Student</span> 
      <span className ="gdsc" style ={{color: "#EA4335"}}>Clubs</span>  
        </h1>
    <div style ={{ width: "50%" , marginTop: "30px" , fontFamily : "Google Sans, Open Sans"}}>
    <p style ={{fontSize : "21px"}}>
    Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a
    peer-to-peer learning environment and build solutions for local businesses and their community.
    </p>
    </div>
   </div>
</div>


<div  className ="events">
    <h2>Upcoming events near you</h2>
    <div className="eventCards">
          {eventList?.map((events) =>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={events.imageEvent} />
              <Card.Body>
                <Card.Title>{events.nameEvent}</Card.Title>
                <Card.Text>
                  {events.description}
                  {events.dateEvent}
                  {userIsAdmin?.role ==='admin' ? <i class="fa-solid fa-trash"></i> : console.log ("mahouch admin")}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;