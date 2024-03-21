// import axios from "axios";
import { useState, useEffect } from "react";
import ImgCard from "../components/imgCard/ImgCard";

const Home = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    // (async () => {
    //     const res = await axios.get('//localhost:8088/images');
    //     setImages(res.data);
    // })()
  }, [images]);

  const imageList = images.map(image => <ImgCard src="{image}"/>);

  return (
    true && (
      <div>
        <ImgCard />
        {}
      </div>
    )
  );
};

export default Home;
