import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {

    const [images, setImages] = useState();
    
    useEffect(() => {
        (async () => {
            const res = await axios.get('//localhost:8088/images');
            setImages(res.data);
        })()
    }, [images]);

    return true && (

        <div>
            {/* {images.map(image => <ImageCard><ImageCard/>)} */}
        </div>
    )
}

export default Home;