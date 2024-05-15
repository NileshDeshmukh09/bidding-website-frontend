import {axiosInstance} from '../axios/axios';

export const createJob = async (data , token ) => {
  try {
 
    const response = await axiosInstance.post('/jobs', data, {
      headers: {
        'x-access-token': token, 
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
    return error.response.data;
  }
};

export const getJobsByClient = async ( { clientId, token} ) => {
    try {
   
      const response = await axiosInstance.get(`/jobs/client/${clientId}`, {
        headers: {
          'x-access-token': token, 
        },
      });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error.response.data);
      return error.response.data;
    }
  };

