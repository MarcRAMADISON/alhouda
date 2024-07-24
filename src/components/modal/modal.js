import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomSlider from "../slider/slider";
import CustomTabs from "../tabs/customTabs";
import { Button, useMediaQuery } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35%",
  maxWidth:"400px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function CustomModal({
  open,
  setOpen,
  title,
  text,
  imagesUrl,
  video,
}) {
  const handleClose = () => setOpen(false);
  const isMobile=useMediaQuery('(max-width:920px)')


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"       
      >
        <Box sx={isMobile? {...style,width:"100%",maxWidth:"400px"} : style}>
        {isMobile && <Button variant='text' onClick={handleClose} color='error' >Fermer</Button>}
          <CustomTabs
            labels={["Photos", "vidéos"]}
            panels={[
              <CustomSlider imagesUrl={imagesUrl} />,
              <video width="100%" height='60%' src={video} controls />,
            ]}
          />
          <Typography sx={{ mt: 4,fontWeight:'bold' }} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
            {text}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
