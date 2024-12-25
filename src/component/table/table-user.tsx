"use client";
import React from "react";
import { IUser } from "@/type/user.type";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/service/user-service";

export type ColumnDefs<T> = {
  title: string;
  field?: keyof T;
  render?: (rowData: T) => React.ReactNode;
};

const TableUser = () => {
  const columnDefs: ColumnDefs<IUser>[] = [
    {
      title: "id",
      field: "id",
    },
    {
      title: "Nama",
      field: "name",
    },
    {
      title: "Email",
      field: "email",
    },
    {
      title: "Phone",
      field: "phone",
    },
  ];
  const { data } = useQuery({
    queryKey: ["id"],
    queryFn: getUser,
  });
  return (
    <table className="min-w-full divide-y overflow-hidden rounded-lg divide-gray-800 shadow-lg">
      <thead className="bg-green-200">
        <tr>
          {columnDefs.map((column, index) => (
            <th
              key={index}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data &&
          data.map((rowData, index) => (
            <tr key={index} className="cursor-pointer hover:bg-gray-100">
              {columnDefs.map((column, index) => {
                if (!rowData) return <></>;
                let value = rowData[column.field!] || "-";
                if (typeof value === "object") {
                  value = JSON.stringify(value);
                }
                if ("field" in column)
                  return (
                    value && (
                      <td key={index} className="px-6 py-4 whitespace-nowrap">
                        {value.toString()}
                      </td>
                    )
                  );

                return (
                  column.render &&
                  column.render(rowData) && (
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      {column.render(rowData)}
                    </td>
                  )
                );
              })}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableUser;
