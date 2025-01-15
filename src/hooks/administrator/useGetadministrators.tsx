"use client";
import { Administrator } from "@/types/Administrator.types";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";

const useGetAdministrators = () => {
  const [data, setData] = useState<Administrator[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getAdministrators = async () => {
    try {
      const { data } = await axiosInstance.get("/administrator/get-administrator");
    
      setData(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAdministrators();
  }, []);

  return { data, isLoading };
};

export default useGetAdministrators;
