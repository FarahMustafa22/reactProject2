import React from "react";
import './App.css';
import image1 from './apple-tv-4k.jpeg';
import image2 from './imac24-digitalmat-gallery-2-202310.png';
import image3 from './vision-pro-gallery-measure-dual-loop-202401.jpeg';
import image4 from './airtag-single-select-202104_FV1.jpeg';

class Products extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="container">
        <div className="container1">
          <div className="product">
            <img src={image1} alt="Apple TV 4K" />
            <h3>Apple TV 4K</h3>
            <p>Apple TV 4K (3rd generation) brings the best of TV together with your favorite Apple devices and services — including the new FaceTime experience on TV.</p>
            <button>Buy</button>
          </div>
          <div className="product">
            <img src={image2} alt="iMac" />
            <h3>iMac</h3>
            <p>Supercharged by the Apple M3 chip, so everything you do on your iMac is incredibly fast and responsive.</p>
            <button>Buy</button>
          </div>
        </div>
        <div className="container2">
          <div className="product">
            <img src={image3} alt="Apple Vision Pro" />
            <h3>Apple Vision Pro</h3>
            <p>Apple Vision Pro is a mixed-reality headset developed by Apple Inc. It was announced on June 5, 2023, at Apple's Worldwide Developers Conference, and pre-orders began on January 19, 2024.</p>
            <button>Buy</button>
          </div>
          <div className="product">
            <img src={image4} alt="AirTag" />
            <h3>AirTag</h3>
            <p>Attach an AirTag to your keys or backpack. If you misplace something, just use the Find My app to locate it. An AirTag can be shared with up to five people, so friends and family can keep track of items everyone uses.</p>
            <button>Buy</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
