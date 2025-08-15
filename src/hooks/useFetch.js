import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

// export const useFetch = async (url) => {
//   let response;
//   let error;
//   try {
//     const res = await axios.get(`${baseUrl}/${url}`);
//     // console.log(res);
//     response = res.data;
//     // return res.data;
//   } catch (err) {
//     // console.log(err);
//     error = err;
//   }
//   //   console.log(response);

//   return { data: response, error, name: "ade" };
// };

export const useFetch = (url, querykey) => {
  const { data, isPending, error } = useQuery({
    queryKey: [...querykey],
    queryFn: () => axios.get(`${baseUrl}/${url}`),
  });

  //   console.log(data);
  if (error) {
    console.log(error);
  }

  return { data, error, isPending };
};
