import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxiosGet = (url) => {
    const [ data, setData ] = useState([]);

    
    useEffect(() => {
        const axiosGetData = async () => {
            const response = await axios.get(url);
            if(response) {
                await setData(response.data);
            }
        }
        axiosGetData();
    }, [url]);
    return data;
}

export default useAxiosGet;