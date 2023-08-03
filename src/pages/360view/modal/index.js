import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ReactImageTurntable  } from "react-image-turntable";
// import {React360Viewer} from React360Viewer;
// import '../styles.module.css';
// import ThreeSixty from 'react-360-view';
import {React360Viewer} from 'react-360-product-viewer';

function Modal360({ show, handleClose, cardData }) {
  const basePath = "/uploads/world_frames/";
  const assetPrefixServer = process.env.NEXT_PUBLIC_SERVER_ASSETS || ''

  // Check if cardData is null or undefined
  if (!cardData) {
    return null; // Don't render the modal if there's no card data
  }

  const { folder_name,file_count,images} = cardData;
  
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{folder_name.split('.')[1]}</Modal.Title>
        </Modal.Header>
          <Modal.Body className='text-center'>
            <div>

              <React360Viewer 
                imagesBaseUrl={`${assetPrefixServer}${folder_name  || ''}`}
                imagesCount={file_count}
                imagesFiletype="jpg"
                mouseDragSpeed={20}
                width={700}
                height={450}
                reverse="true"
              />
            </div>
            {/* <div>

              <ReactImageTurntable images={images} movementSensitivity="5" />
            </div> */}
            {/* <ThreeSixty
              amount={file_count}
              imagePath={`${assetPrefixServer}${folder_name  || ''}`}
              fileName={`image_{index}.jpg`}
              spinReverse
              autoplay="1"
            
            /> */}
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal360;
