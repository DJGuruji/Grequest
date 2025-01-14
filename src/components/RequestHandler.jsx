import React, { useEffect } from 'react';
import axios from 'axios';
import {toast} from "sonner";

const RequestHandler = () => {
    useEffect(() => {
  
        const fetchData = async () => {
            try {
                const response = await axios.get(import.meta.env.FMC_API_URL);
                console.log('Response:', response.data);
                toast.success("success");
            } catch (error) {
                toast.error('Error fetching data:', error);
            }
        };

     
        fetchData();

   
        const intervalId = setInterval(fetchData, 240000);


        return () => clearInterval(intervalId);
    }, []);

    return <div>Requesting data every 4 minutes...</div>;
};

export default RequestHandler;
