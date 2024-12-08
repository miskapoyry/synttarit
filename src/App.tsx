import { useState } from 'react';
import './App.css';
import { Card, CardBody, CardSubtitle, CardTitle, Button } from 'reactstrap';

function App() {
  const originalImage = "/image-removebg-preview.png";
  const newImage = "/image-removebg-preview (1).png";
  const [image, setImage] = useState(originalImage);

  const toggleImage = () => {
    setImage(prevImage => (prevImage === originalImage ? newImage : originalImage));
  };

  return (
    <>
      <div
        style={{
          backgroundImage: 'url("public/background-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          style={{
            width: '20rem',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            border: 'none',
            borderRadius: '10px',
          }}
        >
          <img
            alt="Näytön kuva"
            src={image}
            style={{
              width: '100%',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
            }}
          />
          <CardBody>
            <CardTitle tag="h3" style={{color:'black'}}>
              Hyvää syntymäpäivää Vilpulle!
            </CardTitle>
            <CardSubtitle
              className="mb-2"
              tag="h4"
              style={{color:'black'}}
            >
              Toivoo: Miska, Taru ja Ella
            </CardSubtitle>
            <Button
              color="success"
              onClick={toggleImage}
            >
              Toinen puoli
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default App;
