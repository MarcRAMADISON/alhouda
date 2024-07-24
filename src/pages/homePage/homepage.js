import "./homepageStyle.css";
import MenuBar from "../../components/menuBar/menuBar";
import Footer from "../../components/footer/footer";
import SpeedMail from "../../components/speedMail/speedMail";
import Box from "@mui/material/Box";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { Typography } from "@mui/material";
import Lottie from "lottie-react";
import welcomeAnimation from "./welcomeAnimation.json";

const Homepage = () => {
  return (
    <Box style={{position:'absolute',maxWidth:'1600px'}}>
      <MenuBar />
      <SpeedMail />
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        animateOnce
        initiallyVisible
        duration={3}
      >
        <img
          className="banniere"
          src="./images/banière alhouda.jpg"
          alt="bannière alhouda"
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="slideInRight"
        animateOut="slideOutLeft"
        initiallyVisible
        duration={3}
        animateOnce
      >
        <Box className="blockContainer">
          <Box className="presentationBlock">
            <Lottie
              animationData={welcomeAnimation}
              autoPlay
              loop
              style={{maxWidth:'700px',width: "100%",marginTop:'-55px' }}
            />
            <Box className="presentationSection">
              <Typography variant="h5" color="white">
                Alhouda, c'est quoi?
              </Typography>
              <Box sx={{ marginTop: "20px",textAlign:'left' }}>
                <Typography variant="h7" color="white" style={{textAlign:'left'}}>
                  Alhouda est une ONG (Organisation Non Gouvernementale) malgache, oeuvrant dans des aides caricatives pour les personnes démunies à Madagascar.
                  Les aides proposées si dessus, sont principalement alimentaires ou materiels, à travers des dons de mouton et des constructions de puits d'eau vue l'accès difficile à l'eau dans le pays.
                  <br/>Nos objectifs, ce sont de nourrir les gens dans les rues et d'offrir les materiels indispensables à leurs besoins quotidiens comme des couvertures, des habits, ...
                  En plus, on travaille aussi dans des travaux de construction de mosquée dans toute l'île ainsi participer à l'expansion de la réligion musulman. 
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={3} animateOnce>
        <Box className="videoContainer">
          <video
            src="./videos/al houda presentation_4.mp4"
            controls
            className="video"
            poster="./images/poster_video_presentation.jpg"
          />
        </Box>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="slideInRight"
        animateOut="slideOutLeft"
        duration={3}
        animateOnce
      >
        <Box className="blockContainer">
          <Box className="titleContainer">
            <Box className="line"></Box>
            <h1>Faire un don</h1>
            <Box className="line"></Box>
          </Box>
          <Box className="tarifBlock">
            <Box className="tarifSection">
              <img className="image" src="./images/mouton1.jpg" alt="mouton" />
              <div className="overLay">
                <span className="overLayText">Mouton SADAQA</span>
              </div>
              <span className="mobileText">Mouton SADAQA</span>
              <Box className="priceSection">
                <Typography variant="h5" color="white">
                  79€
                </Typography>
              </Box>
            </Box>
            <Box className="tarifSection">
              <img
                className="image"
                src="./images/lavadrano.jpg"
                alt="mouton"
              />
              <div className="overLay">
                <span className="overLayText">Construction de puit d'eau</span>
              </div>
              <span className="mobileText">Construction de puit d'eau</span>
              <Box className="priceSection">
                <Typography variant="h5" color="white">
                  499€
                </Typography>
              </Box>
            </Box>
            <Box className="tarifSection">
              <img className="image" src="./images/mouton2.jpg" alt="mouton" />
              <div className="overLay">
                <span className="overLayText">Mouton AQIQA</span>
              </div>
              <span className="mobileText">Mouton AQIQA</span>
              <Box className="priceSection">
                <Typography variant="h5" color="white">
                  79€
                </Typography>
              </Box>
            </Box>
            <Box className="tarifSection">
              <img className="image" src="./images/aideHumanitaire.jpg" alt="mouton" />
              <div className="overLay">
                <span className="overLayText">
                  Aide humanitaire (alimentaire ou materielle)
                </span>
              </div>
              <span className="mobileText">
                Aide humanitaire (alimentaire et materiel)
              </span>
              <Box className="priceSection">
                <Typography variant="h5" color="white"></Typography>
              </Box>
            </Box>
            <Box className="tarifSection">
              <img className="image" src="./images/mosquée.jpg" alt="mosquée" />
              <div className="overLay">
                <span className="overLayText">Construction de mosquée</span>
              </div>
              <span className="mobileText">Construction de mosquée</span>
              <Box className="priceSection">
                <Typography variant="h5" color="white"></Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollAnimation>
      <Footer />
    </Box>
  );
};

export default Homepage;
