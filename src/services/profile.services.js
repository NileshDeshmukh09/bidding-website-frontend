import {axiosInstance} from '../axios/axios';

export const createFreelancerProfile = async (data , token ) => {
  try {
 
    const response = await axiosInstance.post('/user/freelancers', data, {
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

export const clientProfile = async (data , token) => {
  try {
   
    const response = await axiosInstance.post('/user/clients', data, {
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
