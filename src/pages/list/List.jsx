import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./list.css";

export default function List() {
  const location = useLocation();
  const loadedList = location.state.list;
  const [list, setList] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  createList(movie, dispatch);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newlist">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{loadedList.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">{loadedList._id} </span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">genre: </span>
              <span className="productInfoValue">{loadedList.genre} </span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">type: </span>
              <span className="productInfoValue">{loadedList.type} </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <div className="newProduct">
          <h1 className="addProductTitle">Update Movie</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Title</label>
              <input
                type="text"
                placeholder={loadedList.title}
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Genre</label>
              <input
                type="text"
                placeholder={loadedList.genre}
                name="desc"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Type</label>
              <select name="isSeries" id="active" onChange={handleChange}>
                <option value="false">{loadedList.type}</option>
                {loadedList.type === "movie" ? (
                  <option value="true">series</option>
                ) : (
                  <option value="true">movie</option>
                )}
              </select>
            </div>
            <>
              <button className="addProductButton" onClick={handleSubmit}>
                Update
              </button>
            </>
          </form>
        </div>
      </div>
    </div>
  );
}
