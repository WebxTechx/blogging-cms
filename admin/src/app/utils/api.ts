import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { constant } from './constant';
import { toastError } from './global';

// Define a custom error interface to handle API errors
export interface ApiError {
  status: number;
  message: string;
}

// Define a generic type for the response data
export type ApiResponse<T> = AxiosResponse<T>;

// Define a function to handle Axios GET requests
async function axiosGet<T>(
  url: string,
  headers?: Record<string, string>
): Promise<T> {
  try {
    const config: AxiosRequestConfig = {
      headers: headers || {},
    };
    const response = await axios.get<T>(url, config);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// Define a function to handle Axios POST requests
async function axiosPost(
  url: string,
  data: any,
  headers?: Record<string, string>
): Promise<any> {
  try {
    const config: AxiosRequestConfig = {
      headers: headers || {},
    };
    const response = await axios.post<any>(
      constant.baseURL + url,
      data,
      config
    );
    if (
      response?.data?.message === 'Success' &&
      response?.data?.status === 200
    ) {
      return response?.data?.data;
    }
  } catch (error) {
    throw handleApiError(error);
  }
}

// Define a function to handle Axios errors
function handleApiError(error: any): ApiError {
  if (error.response) {
    // The request was made and the server responded with a status code
    const status = error.response.status;
    const message = error.response.data.message || 'Unknown error';
    toastError(message)
    return { status, message };
  } else if (error.request) {
    // The request was made but no response was received
    return { status: 500, message: 'No response received from the server' };
  } else {
    // Something happened in setting up the request that triggered an error
    return { status: 500, message: 'Error setting up the request' };
  }
}

export { axiosGet, axiosPost };
