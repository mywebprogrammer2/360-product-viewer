import { useEffect,useState,useRef } from "react"
import { useDispatch } from "react-redux"
import Layout from "../../components/Layouts/Layout"
import withAuth from "../../hoc/withAuth"


import { Card, Button,Form,Spinner  } from 'react-bootstrap';

import Modal360 from './modal/index';
import axios from '../../lib/axios'
import Swal from 'sweetalert2'

const View360 = () => {
    const [show, setShow] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = (cardData) => {
      setSelectedCard(cardData);
      setShow(true);
    };
    
    const assetPrefixServer = process.env.NEXT_PUBLIC_SERVER_ASSETS || ''; // Providing a default value if the environment variable is not set
    
  
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/getViews'); 
        console.log('repsonse: ',response.data);
        setData(response.data);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        //  setLoading(false);
      }
    };
  
    useEffect(() => {
      // Function to make the Axios API call
      
  
      fetchData(); // Call the function to fetch data when the component mounts
  
      // Cleanup function
      return () => {
        // Cancel any ongoing Axios requests here (if needed)
      };
    }, []);
  
    const fileInputRef = useRef(null);
    const handleConvertMedia = async () => {
      
      const videoFile = document.getElementById('fileInput').files[0];
     
      if(videoFile){
        setLoading(true);
        const formData = new FormData();
        formData.append('video', videoFile);
        
        axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/convertMedia',formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then(response => {
              console.log('response success: ',response);
              setLoading(false);
              Swal.fire({
                  title: 'Success!',
                  text: response.data.message,
                  icon: 'success',
                  showCancelButton: false,
                  confirmButtonText: 'Okay',
                }).then(() => {
                 fetchData();
                 // Clear the selected file from the file input
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                });
          })
          .catch(error => {
              // Handle error response here
              console.error('Problem occured:', error.response);
              // You can display an error message or perform other error handling actions
          });
      }else{
        setLoading(false);
        Swal.fire({
            title: 'Sorry!',
            text: "Please select video file",
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Okay',
          });
      }
    }
  
    // Sample data for multiple cards (you can replace this with your own data)
    const cardsData = [
      {
          id: 1,
          title: 'Card 1 - 360 View',
          imagePath: '/uploads/world_frames/',
          imageFileName: 'ezgif-frame-{index}.jpg',
          imageCover:'ezgif-frame-1.jpg',
          frames:200
      },
      {
          id: 2,
          title: 'Card 2 - 360 View',
          imagePath: '/uploads/watch_frames/',
          imageFileName: 'ezgif-frame-{index}.jpg',
          imageCover:'ezgif-frame-16.jpg',
          frames:150
      },
      {
          id: 3,
          title: 'Card 3 - 360 View',
          imagePath: '/uploads/glasses_frames/',
          imageFileName: 'ezgif-frame-{index}.jpg',
          imageCover:'ezgif-frame-2.jpg',
          frames:110
      },
      {
          id: 4,
          title: 'Card 4 - 360 View',
          imagePath: '/uploads/cap_frames/',
          imageFileName: 'ezgif-frame-{index}.jpg',
          imageCover:'ezgif-frame-10.jpg',
          frames:110
      },
      {
          id: 5,
          title: 'Card 5 - 360 View',
          imagePath: '/uploads/shoe_frames/',
          imageFileName: 'ezgif-frame-{index}.jpg',
          imageCover:'ezgif-frame-108.jpg',
          frames:115
      },
      // Add more cards as needed...
    ];
  
  
    return (
      <Layout>
        
       
        {loading && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Transparent black overlay */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column', // Added to stack the spinner and text vertically
            zIndex: 9999,
          }}>
            <Spinner animation="border" role="status" variant="primary" style={{ width: '4rem', height: '4rem' }}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <div style={{ color: '#fff', marginTop: '10px', fontSize:'20px', fontWeight:'bold' }}>Please wait, 360 view is being generated...</div>
          </div>
        )}
          <Modal360 show={show} handleClose={handleClose} cardData={selectedCard} />
  
          <div className='row px-3 py-4'>
            <div className='col-10'>
                <Form.Control type="file" accept='video/mp4' id="fileInput" ref={fileInputRef}/> 
            </div>
            <div className='col-2'>
                <Button variant="primary w-100" onClick={handleConvertMedia}>
                    Convert
                </Button>
            </div>
          </div>
  
          <div className="row">
            {data.map((card) => (
              <div key={card.id} className="col-md-4" style={{ marginTop: '10px' }}>
                <Card>
                  <Card.Header>{card.folder_name.split('.')[1]}</Card.Header>
                  <Card.Body onClick={() => handleShow(card)}>
                    <img
                      src={`${assetPrefixServer}${card.folder_name  || ''}/3.jpg`}
                      className="img-fluid shadow-4"
                      alt="..."
                    />
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-end">
                    <Button variant="primary" onClick={() => handleShow(card)}>
                      View in 360
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        
       
  
        
      </Layout>
    );
}

export default withAuth(View360)