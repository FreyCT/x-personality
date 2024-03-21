import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Questions = () => {

    const { id } = useParams();
    const [question, setquestion] = useState();


    
    useEffect(() => {
        (async () => {

        })()
    }, [id]);



    return true && (
        <div>
           
        </div>
    )
}

export default Questions;