import axios from 'axios';

const citiesUrl = () => `${process.env.API_PATH}/cities/`;

export const cities = async (id: string, query: Object = {}) => {
  const response = await axios.get(citiesUrl(), { params: query })
  return response.data
};
