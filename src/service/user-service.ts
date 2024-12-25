import { IUser } from "@/type/user.type";

const baseUrl = "https://tech-class.datacore.machinevision.global";
const urlUser = "/items/user";
const token = "o_6o7PNTrqXd99gXLVd0j8F430zAXH_";
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

export const getUser = async () => {
  //   const res = await fetch(
  //     `${baseUrl}${urlUser}`,
  //     {
  //       method: "GET",
  //       headers,
  //     }
  //   );
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Error: ${res.status} - ${res.statusText}`);
  }
  const data = await res.json();
  return data as IUser[];
};

export const addUser = async (body: IUser) => {
  const res = await fetch(`${baseUrl}${urlUser}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const errResponse = await res.json();
    console.log("Error response:", errResponse);
    throw new Error(
      `Error: ${res.status} - ${res.statusText} - ${errResponse}`
    );
  }
};

export const deleteUser = async (body: IUser) => {
  const res = await fetch(`${baseUrl}${urlUser}`, {
    method: "DELETE",
    headers,
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const errResponse = await res.json();
    console.log("Error response:", errResponse);
    throw new Error(
      `Error: ${res.status} - ${res.statusText} - ${errResponse}`
    );
  }
};
