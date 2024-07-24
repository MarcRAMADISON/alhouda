import { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useMediaQuery,Modal,Box, Button, TextField, Typography } from "@mui/material";


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

const  PayementModal=({open,setOpen})=> {
  const [values,setValues]=useState()
  const isMobile=useMediaQuery('(max-width:920px)')

  const handleClose = () =>{
    setOpen(false);
    setValues()
  } 

  const handlChange=(event)=>{
    setValues((prev)=>({...prev,[event.target.name]:event.target.value}))
  }

  console.log('amount',values)
  
  
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
        <Typography sx={{ mb:'30px'}}variant="h6" color="blue">Merci pour votre don</Typography>
        <TextField type='text' sx={{width:'100%', mb:'20px'}} id="filled-basic" name="name" value={values?.name} label="Votre nom" variant="filled" onChange={handlChange} />
        <TextField type='email' sx={{width:'100%', mb:'20px'}} id="filled-basic" name="email" value={values?.email} label="Votre addresse" variant="filled" onChange={handlChange} />
        <TextField sx={{width:'100%', mb:'20px'}} type="number" id="filled-basic" name="amount" value={values?.amount} label="Montant (€)" variant="filled" onChange={handlChange} />
          <PayPalButton
            amount={values?.amount || 0}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert("Transaction completed by " + details.payer.name.given_name);
  
              // OPTIONAL: Call your server to save the transaction
              return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                  orderId: data.orderID
                })
              });
            }}
          
          />
        </Box>
      </Modal>
    </div>
  );
  
  
}

export default PayementModal