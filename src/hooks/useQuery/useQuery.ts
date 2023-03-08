import { useEffect, useState } from "react";

const useQuery = (url: string) => {
  const [state, setState] = useState<{
    data: RootObject | unknown;
    loading: boolean;
    isSuccess: boolean;
    status: number;
    error: unknown;
  }>({
    data: [],
    status: 0,
    isSuccess: false,
    loading: true,
    error: null
  });
  const fetchData = () =>
    fetch(url)
      .then(async (response) => {
        return {
          ...state,
          status: response.status,
          isSuccess: response.ok,
          data: await response.json()
        };
      })
      .then((data) => {
        setState({
          ...data,
          loading: false
        });
      })
      .catch((error) => {
        setState({
          ...state,
          error,
          loading: false
        });
      });

  useEffect(() => {
    fetchData();
  }, []);

  return state;
};

export default useQuery;
