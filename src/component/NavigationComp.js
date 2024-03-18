import {React , useState} from 'react'
import { Container, Navbar } from 'react-bootstrap'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link,useNavigate } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Button from 'react-bootstrap'
export const NavigationComp = () => {
    
    const nav = useNavigate();

    const [showButton, setShowButton] = useState(true);
    const toggleButton = () => {
         setShowButton(!showButton);    
    }
    
    const logout=()=>{
        if(window.confirm('Are you sure to logout')){
            
            sessionStorage.removeItem("user")
            nav('/')
            // document.getElementById('visible').style.display='none'
        }
    }
    
    const services_access=()=>{
        if(!sessionStorage.getItem("user")){
            nav('/login')
        }else if(sessionStorage.getItem("user")){
            nav('/services')

        }
    }

    

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{height : '5em'}}>
                <Container>
                    <Navbar.Brand href='/' className='mt-1'><img src='https://tse1.mm.bing.net/th/id/OIP.GyWqMDYf4DCTJM4aOY5oIgHaHa?rs=1&pid=ImgDetMain' className='res'/></Navbar.Brand>
                    <Nav className="justify-content-end " id='nav'>
                        <Nav.Link href='/about' className='btn btn-outline-secondary p-3'>About</Nav.Link>
                        <Nav.Link className='btn btn-outline-secondary p-3' onClick={()=>{services_access()}}>Services</Nav.Link>
                        <Nav.Link href='/contact'className='btn btn-outline-secondary p-3 '>Contact</Nav.Link>
                        {!sessionStorage.getItem("user") && <Nav.Link href='/login' className='btn btn-outline-secondary p-3 '>Login</Nav.Link>}
                        {sessionStorage.getItem("user") && <button type='button' className='btn' style={{color :"red"}} onClick={()=>{logout()}}><LogoutIcon/></button>}
                        
                        

                    </Nav>
                </Container>
            
            </Navbar>  
        </>
    )
}

export default NavigationComp
