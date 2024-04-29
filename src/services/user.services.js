import axiosInstance from './axios'; 

export const getUser = async () => {
    try {
      const response = await axiosInstance.get('/api/v1/users');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };