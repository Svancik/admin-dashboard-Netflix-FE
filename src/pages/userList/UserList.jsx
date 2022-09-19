import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);
  // Problém - setData nemění data při handleDelete

  console.log("data: ", data);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Username",
      width: 200,
      /* Pomocí kódu renderCell níže vyrenderujeme individuální data např jako img a použijem k tomu data tabulky (url z bunky řádku) */
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Last name", width: 200 },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      type: "number",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={userRows}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
