import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductList() {
    // Problém - setData nemění data při delete =>stejné jako UserList.jsx
    const [data, setData] = useState(productRows);

  {
    /* Vytvořit komponentu pro handleDelete (opakuje se v UserList.jsx)*/
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      /* Pomocí kódu renderCell níže vyrenderujeme individuální data např jako img a použijem k tomu data tabulky (url z bunky řádku) */
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price Volume",
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
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="productList">
      {" "}
      <DataGrid
        rows={productRows}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
