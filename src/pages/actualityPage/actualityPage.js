import MenuBar from "../../components/menuBar/menuBar";
import SpeedMail from "../../components/speedMail/speedMail";
import ActualityCard from "../../components/actualityCard/actualityCard";
import { actualityData } from "../../utilities/data";
import Footer from "../../components/footer/footer";
import "./actualityStyle.css";
import ScrollAnimation from "react-animate-on-scroll";
import FilterAccordeon from "../../components/filterAccordeon/filterAccordeon";
import { Box, useMediaQuery } from "@mui/material";
import Pagination from '@mui/material/Pagination';


const styleBox={
  display:'flex', 
  flexDirection:'row',
  alignItems:'flex-start',
  justifyContent:'center',
}

const mobileBox={
  display:'flex', 
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  marginTop:'100px',
  marginLeft:'10%'
}

const ActualityPage = () => {
  const isMobile=useMediaQuery('(max-width:920px)')
  return (
    <Box className="pageContainer">
      <MenuBar />
      <SpeedMail />
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        animateOnce
        initiallyVisible
        duration={3}
      >
      <Box sx={isMobile? mobileBox : styleBox}>
        <FilterAccordeon/>
        <Box className="cardBlock">
          {(actualityData || []).map((data, index) => (
            <ActualityCard
              imagesUrl={data.imagesUrl}
              title={data.title}
              text={data.text}
              video={data.video}
              key={index}
            />
          ))}
        </Box>
        </Box>
      </ScrollAnimation>
      <Pagination count={6} color="primary" sx={{position:'relative', bottom:'150px'}} />
      <Footer />
    </Box>
  );
};

export default ActualityPage;
