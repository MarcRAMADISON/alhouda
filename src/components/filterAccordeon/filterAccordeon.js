import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';




export default function FilterAccordeon() {


    const RadioButtonsGroup=()=> {
        return (
          <FormControl defaultChecked>
            <FormLabel id="demo-radio-buttons-group-label">Filtrer par date de publication</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Ce mois ci" />
              <FormControlLabel value="male" control={<Radio />} label="Ces 3 dernier mois" />
              <FormControlLabel value="other" control={<Radio />} label="Plus ancien" />
            </RadioGroup>
          </FormControl>
        );
      }

  return (
      <Accordion style={{marginTop:'130px',marginRight:'20px',minWidth:'250px'}}>
        <AccordionSummary
          //expandIcon={}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Filtre</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioButtonsGroup/>
        </AccordionDetails>
      </Accordion>

  );
}
