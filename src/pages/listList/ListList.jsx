import "./listList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { getLists, deleteList } from "./../../context/listContext/apiCalls";

export default function ListList() {
  const { lists, dispatch } = useContext(ListContext);
  console.log("Lists:", lists);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    { field: "title", headerName: "title", width: 220 },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "type", headerName: "type", width: 70 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/list/" + params.row._id} state={{ list: params.row }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
    deleteList(id, dispatch);
  };

  return (
    <div className="productList">
      {" "}
      <DataGrid
        rows={lists}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
