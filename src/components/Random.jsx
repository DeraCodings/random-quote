import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import Quote from './Quote';

export const Random = (props) => {
    const { handleColor, color } = props;

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const [isTrue, setIsTrue] = useState(true);

    const alreadySent = useRef(false);

    const APIRequest = () => {
        axios.get("https://type.fit/api/quotes")
        .then(response => {
            // console.log(response.data[Math.floor(Math.random() * response.data.length)].text)
            // console.log(response.data[Math.floor(Math.random() * response.data.length)].author)
            const data = response.data;
            let randomItem = Math.floor(Math.random() * data.length);
            setQuote(data[randomItem].text);
            setAuthor(data[randomItem].author);
            handleColor();
        })
        .catch(error => {
            if (error.message === 'Network Error') {
                setQuote(error.message);
            }
            else {
                setQuote('Check Your Internet Connection');
            }
        })
    };

    const handleIsTrue = () => APIRequest;

    useEffect(() => {
        if (alreadySent.current) return
        alreadySent.current = true;
        if (isTrue) { 
            APIRequest();
        }
        return () => {
            setIsTrue(false);
        }
    }, [isTrue]);

    return (
        <Quote text={quote} color={color} author={author} handleIsTrue={handleIsTrue} />
    )
}
