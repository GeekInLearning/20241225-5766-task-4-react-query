"use client";
import { addUser, getUser } from "@/service/user-service";
import { IUser } from "@/type/user.type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const FormUser = () => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["user_telkom_malang"],
    queryFn: getUser,
  });

  const [userData, setUserData] = useState<IUser>();

  const mutation = useMutation({
    mutationFn: addUser,
    onMutate: (newUserData) => {
      const prevUserData = userData;
      setUserData((p) => ({ ...p, ...newUserData }));
      return { prevUserData };
    },
    onSuccess: (data) => {
      console.log("User added successfully", data);
      setUserData({
        id: "",
        email: "",
        nama_user: "",
        password: "",
        role: "",
      });
    },
    onError: (error, newUserData, context) => {
      console.error("error adding user: ", error);
      if (context?.prevUserData) {
        setUserData(context.prevUserData);
      }
    },
  });
  return <></>;
};
