// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const images = [
    "image11.jpg",
    "image12.jpg",
    "image13.jpg",
    "image14.jpg",
    "image15.jpg",
    "image16.jpg",
    "image21.jpg",
    "image22.jpg",
    "image23.jpg",
    "image24.jpg",
    "image25.jpg",
    "image26.jpg",
    "image27.jpg",
    "image28.jpg",
    "image31.jpg",
    "image32.jpg",
    "image33.jpg",
    "image34.jpg",
    "image35.jpg",
    "image36.jpg",
    "image37.jpg",
    "image41.jpg",
    "image42.jpg",
    "image43.jpg",
    "image44.jpg",
    "image45.jpg",
    "image46.jpg",
  ];

  return (
    <main className="px-10 mx-auto mt-10">
      <div className=" space-y-3 py-3 sm:columns-2 sm:gap-2 md:columns-3 lg:columns-4 xl:columns-5;">
        {images?.map((image, i) => (
          <Card key={i} image={image} />
        ))}
      </div>
    </main>
  );
}

export default App;
