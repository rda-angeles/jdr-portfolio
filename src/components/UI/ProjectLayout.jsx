import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { certificates } from "../../data";
const ProjectLayout = ({ proj }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

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
    <>
      <a href={certificates.cert} className="lg:hidden">
        <motion.div
          whileHover={{
            y: "-3%",
          }}
          key={proj.id}
          className={`gallery-img-wrapper ${proj.class ? proj.class : ""}`}
        >
          <LazyLoadImage src={proj.proj} effect="blur" width="100%" />
        </motion.div>
      </a>
      <motion.div
        onClick={handleOpen}
        whileHover={{
          y: "-3%",
        }}
        key={proj.id}
        className={`gallery-img-wrapper hidden lg:block ${
          proj.class ? proj.class : ""
        }`}
      >
        <LazyLoadImage src={proj.proj} effect="blur" width="100%" />
      </motion.div>

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
            <div className="img-wrapper">
              <img src={proj.proj} alt="" />
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectLayout;
