import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import budslidercss from './budslidercss.css'

function valuetext(value) {
  return `${value}`;
}

export default function  Budgetslider() {
  const [value, setValue] = React.useState([10, 50]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Buget range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
module.export=Budgetslider;