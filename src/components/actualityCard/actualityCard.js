import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomModal from "../modal/modal";
import { Box } from "@mui/material";

export default function ActualityCard({ imagesUrl, title, text, video }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

  return (
    <>
      <Card sx={{ maxWidth: '350px', minHeight:'350px', position:'relative' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imagesUrl?.length? imagesUrl[0] : ''}
        title="actuality image"
      />
      <CardContent>
        <Typography style={{fontWeight:'bold'}} gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <Box style={{position:'absolute',bottom:'5px', width:'100%'}}>
      <CardActions sx={{display:"flex",justifyContent:"center"}}>
        <Button variant="outlined" size="small" onClick={handleOpen}>Voir détail</Button>
      </CardActions>
      </Box>
     
      <CustomModal open={open} setOpen={setOpen} title={title} text={text} imagesUrl={imagesUrl} video={video}/>
    </Card>
    </>
  
  );
}
