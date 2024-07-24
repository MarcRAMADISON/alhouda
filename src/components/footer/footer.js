import './footerStyle.css';
import { Box } from '@mui/material';


function Footer() {

    return ( 

    <Box className="footerContainer">
        <Box className='contactBlock'>
        <span className="contact">Contacter nous:</span>
        <a href="mailto:alhouda.charity.mada@gmail.com" target='_blank' rel='noreferrer'><img src="./icones/white_mail.png" alt='mail' className='contactIcones' /></a>
        <a href="mailto:alhouda.charity.mada@gmail.com" target='_blank' rel='noreferrer'><img src="./icones/facebook.png" alt='mail' className='contactIcones' style={{height:"20px"}}  /></a>
        </Box>
       <span className="text" style={{marginTop:'10px'}}>alhouda.charity.mada@gmail.com</span>
        <span className="text" style={{marginTop:'20px',textAlign:'center'}}>Site web développé par <a href="mailto:marcramadison006@gmail.com" style={{color:"rgba(151,255,43,1)", fontWeight:'bold'}}>Marc RAMADISON</a>, marcramadison006@gmail.com</span>
    </Box>

     );
}

export default Footer;