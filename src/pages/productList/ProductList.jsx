import "./productList.css";
import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

class ProductList extends Component {
  // Problém - setData nemění data při delete =>stejné jako UserList.jsx
  state = {
    products: productRows,
  };

  columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      /* Pomocí kódu renderCell níže vyrenderujeme individuální data např jako img a použijem k tomu data tabulky (url z bunky řádku) */
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              alt="Apple Airpods"
              className="productListImg"
              src={params.row.img}
            />
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
              onClick={() => this.handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  handleDelete = (id) => {
    const products = this.state.products.filter((u) => u.id !== id);
    this.setState({ products });
  };
  render() {
    return (
      <div className="productList">
        {" "}
        <DataGrid
          rows={this.state.products}
          columns={this.columns}
          disableSelectionOnClick
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );
  }
}
export default ProductList;
