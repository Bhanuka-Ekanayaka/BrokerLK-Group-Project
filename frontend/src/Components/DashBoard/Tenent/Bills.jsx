import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Skeleton from '@mui/material/Skeleton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import GetAppIcon from '@mui/icons-material/GetApp';

const steps = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default function Tenent() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [billImages, setBillImages] = useState(Array(12).fill(null));
  const [uploadTimes, setUploadTimes] = useState(Array(12).fill(null));
  const [openDialog, setOpenDialog] = useState(false);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newBillImages = [...billImages];
        const newUploadTimes = [...uploadTimes];
        newBillImages[activeStep] = reader.result;
        newUploadTimes[activeStep] = new Date().toLocaleString();
        setBillImages(newBillImages);
        setUploadTimes(newUploadTimes);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setOpenDialog(true);
  };

  const handleConfirmRemove = () => {
    const newBillImages = [...billImages];
    newBillImages[activeStep] = null;
    setBillImages(newBillImages);
    setOpenDialog(false);
  };

  const handleCancelRemove = () => {
    setOpenDialog(false);
  };

  const handleImageClick = () => {
    if (billImages[activeStep]) {
      const popupWindow = window.open('', '_blank');
      if (popupWindow) {
        popupWindow.document.write(`
          <html>
            <head>
              <title>Uploaded Image</title>
              <style>
                body {
                  margin: 0;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                }
                img {
                  max-width: 80%;
                  max-height: 80%;
                  object-fit: contain;
                }
              </style>
            </head>
            <body>
              <img src="${billImages[activeStep]}" alt="${steps[activeStep]}"/>
            </body>
          </html>
        `);
      } else {
        alert('Please allow popups for this website');
      }
    }
  };

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = billImages[activeStep];
    downloadLink.download = `bill_image_${activeStep + 1}.jpg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box sx={{ maxWidth: 370, width: '100%', p: 2 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 45,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{steps[activeStep]}</Typography>
        </Paper>
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {billImages[activeStep] ? (
            <>
              <img
                src={billImages[activeStep]}
                alt={steps[activeStep]}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: '40vh',
                  height: '60vh',
                  objectFit: 'cover',
                  cursor: 'pointer'
                }}
                onClick={handleImageClick}
              />
              <Typography variant="body2" sx={{ textAlign: 'center', mt: 1 }}>
                Uploaded on: {uploadTimes[activeStep]}
              </Typography>
              <Button onClick={handleDownload} startIcon={<GetAppIcon />}>Download Bill</Button>
            </>
          ) : (
            <Skeleton
              variant="rectangular"
              width="40vh" // Set a fixed width for the skeleton
              height='60vh'
    
            />
          )}
          {!billImages[activeStep] && (
            <Box sx={{ textAlign: 'center', mt: 2 ,marginLeft:'15vh',marginTop:'7.8125vh'}}>
              <input type="file" onChange={handleUpload} />
            </Box>
          )}
          {billImages[activeStep] && (
            <Button onClick={handleRemove}>Remove Bill</Button>
          )}
        </Box>
        <MobileStepper sx={{ marginLeft:'5vh',marginRight:'5vh'}}
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
        <Dialog open={openDialog} onClose={handleCancelRemove}>
          <DialogTitle>Confirm Remove</DialogTitle>
          <DialogContent>
            Are you sure you want to remove this image?
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelRemove} color="primary">
              No
            </Button>
            <Button onClick={handleConfirmRemove} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}
