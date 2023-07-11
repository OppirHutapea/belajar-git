import axios, { AxiosInstance } from 'axios';

class apiLoginDealer{
    private axiosInstance: AxiosInstance;
}

const axiosInstance = axios.create({
  baseURL: 'https://public-api-sqeid.stg.squantumengine.com'
});


export default apiLoginDealer;