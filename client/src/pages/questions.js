import { useState, useEffect } from 'react';
import axios from 'axios';

const Questions = () => {

    const [question, setquestion] = useState();
    const [questions, setquestions] = useState();
    
    useEffect(() => {
        (async () => {
            const questions = await axios.get("//localhost:8088/questions");
            setquestions(questions.data)
            console.log(questions);
            setquestion({...questions.data[0]});
        })()
    }, [questions]);

    return question && (
        <div className='question-container'>
            <p>{`${question.question}`}</p>
        </div>
    )
}

export default Questions;