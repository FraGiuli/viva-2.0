import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = ({ images }) => {
  return (
    <Zoom scale={1.4} indicators={true}>
      {images.map((each, index) => (
        <div key={index} style={{ width: "100%" }}>
          <img
            style={{ objectFit: "cover", width: "100%" }}
            alt="Slide Image"
            src={each}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default Slider;
