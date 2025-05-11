import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (...args) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await cb(...args);
      setData(response);
      return response; // This is crucial for getting the response in your component
    } catch (error) {
      const errorObj = {
        message: error.message || "An unknown error occurred",
        ...error
      };
      setError(errorObj);
      toast.error(errorObj.message);
      throw errorObj; // Re-throw to allow handling in the component
    } finally {
      setLoading(false);
    }
  };

  return { 
    data, 
    loading, 
    error, 
    fn: execute, // Renamed to be more descriptive
    setData 
  };
};

export default useFetch;
