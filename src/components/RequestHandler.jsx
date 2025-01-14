import React, { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

const RequestHandler = () => {
    useEffect(() => {

        const fetchData = async () => {
            try {
            
                const response = await axios.get(`https://cors-anywhere.herokuapp.com/${import.meta.env.FMC_API_URL}`);
                
           
                console.log('Response:', response.data);
                console.log("Request sent");

            
                toast.success("Request successful");
            } catch (error) {
                
                console.error('Error fetching data:', error);
                toast.error(`Error fetching data: ${error.message}`);
            }
        };

   
        fetchData();

       
        const intervalId = setInterval(fetchData, 240000);

        
        return () => clearInterval(intervalId);
    }, []);

    return <div>Requesting data every 4 minutes...</div>;
};

export default RequestHandler;
