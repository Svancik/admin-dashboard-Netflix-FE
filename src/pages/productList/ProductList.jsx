import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { MovieContext } from "./../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "./../../context/movieContext/apiCalls";

/* Pokračovat 3:22:37 => na GITHUB nahrát movie fetch commit */

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "movie",
      headerName: "Movie",
      width: 220,
      /* Pomocí kódu renderCell níže vyrenderujeme individuální data např jako img a použijem k tomu data tabulky (url z bunky řádku) */
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 70 },
    { field: "limit", headerName: "Limit", width: 70 },
    { field: "isSeries", headerName: "isSeries", width: 70 },
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
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
    deleteMovie(id, dispatch);
  };

  return (
    <div className="productList">
      {" "}
      <DataGrid
        rows={movies}
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
