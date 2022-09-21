import "./userList.css";
import React, { Component } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

class UserList extends Component {
  state = {
    users: userRows,
  };

  handleDelete = (id) => {
    const users = this.state.users.filter((u) => u.id !== id);
    this.setState({ users });
  };

  columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Username",
      width: 200,
      /* Pomocí kódu renderCell níže vyrenderujeme individuální data např jako img a použijem k tomu data tabulky (url z bunky řádku) */
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img alt="user" gclassName="userListImg" src={params.row.avatar} />
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
              onClick={() => this.handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  render() {
    return (
      <div className="userList">
        <DataGrid
          rows={this.state.users}
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
export default UserList;
