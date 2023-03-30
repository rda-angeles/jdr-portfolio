import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const Certificates = ({ certificate }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <div className="lg:hidden">
        <a href={certificate.cert} target="_blank">
          <div
            className="img-wrapper bg-img h-[20rem] w-full mx-auto cursor-pointer"
            style={{
              backgroundImage: `url(${certificate.cert})`,
            }}
          ></div>
        </a>
      </div>

      {/* Larger Devide */}
      <div
        onClick={handleOpen}
        className="img-wrapper bg-img h-[20rem] w-full mx-auto cursor-pointer hidden lg:block"
        style={{
          backgroundImage: `url(${certificate.cert})`,
        }}
      ></div>

      {/* For Larger Device */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="img-wrapper max-w-[40rem] mx-auto">
              <img src={certificate.cert} alt="" />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Certificates;
