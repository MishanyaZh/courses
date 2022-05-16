import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LastNews from '../../LatestNews/LatestNews';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid rgba(55, 71, 79, 1)',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

const ModalLatestNews = ({ handleCloseModal, openModal }) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LastNews />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalLatestNews;
