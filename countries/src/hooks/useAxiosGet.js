import { useEffect, useState } from 'react';
import axios from 'axios';

export const useAxiosGet = (url) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
            const getData = async (url) => {
                const fetched = await axios.get(url);
                if (fetched) {
                    setData(fetched.data);
                } else {
                    throw Error("axios call didn't work -- GET");
                }
            }
            getData(url);
            
    }, [url]);

    return data;
}

