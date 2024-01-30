import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Image from "./components/Image";

const arr = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

function App() {
  const [link, setLink] = useState(0);
  const handlePrev = () => {
    setLink((prevLink) => {
      if (prevLink <= 0) {
        return arr.length - 1;
      } else {
        return prevLink - 1;
      }
    });
  };

  const handleNext = () => {
    setLink((prevLink) => {
      if (prevLink >= arr.length - 1) {
        return 0;
      } else {
        return prevLink + 1;
      }
    });
  };

  return (
    <>
    <div className="page">


    <button onClick={handlePrev}>prev</button>
      {/* {arr.map((img) => (
        <div key={img}>
          
          <Image  link={img} />
        </div>
      ))} */}
      <div className="imgs" >


      <Image  link={arr[link]}/>
      </div>
      <button onClick={handleNext}>next</button>
      </div>
    </>
  );
}

export default App;
