import { Publish } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { useState, useContext } from "react";
import storage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "./../../context/movieContext/MovieContext";

export default function Product() {
  const location = useLocation();
  const loadedMovie = location.state.movie;

  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  //TODO: Nastavit náhled obrázku před jeho oficiálním uploadem na server dle videa zde - https://www.youtube.com/watch?v=o2nmgbZaGMw&ab_channel=RahulAhire
  // 4:07:00 vysvětluje jak na to

  const upload = (items) => {
    console.log(items);
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, "items/" + fileName);
      const uploadTask = uploadBytesResumable(storageRef, item.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: downloadURL };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={loadedMovie.img} alt="" className="productInfoImg" />
            <span className="productName">{loadedMovie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">{loadedMovie._id} </span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">genre: </span>
              <span className="productInfoValue">{loadedMovie.genre} </span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">year: </span>
              <span className="productInfoValue">{loadedMovie.year} </span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">limit: </span>
              <span className="productInfoValue">{loadedMovie.limit} </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <div className="newProduct">
          <h1 className="addProductTitle">Update Movie</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Image</label>
              <div className="productUpload">
                <img
                  src={loadedMovie.img}
                  alt=""
                  className="productUploadImg"
                />
                <label for="img">
                  <Publish />
                </label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={(e) => setImg(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="addProductItem">
              <label>Image Title</label>
              <div className="productUpload">
                <img
                  src={loadedMovie.imgTitle}
                  alt=""
                  className="productUploadImg"
                />
                <label for="imgTitle">
                  <Publish />
                </label>
                <input
                  type="file"
                  id="imgTitle"
                  name="imgTitle"
                  onChange={(e) => setImgTitle(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div className="addProductItem">
              <label>Image Small</label>
              <div className="productUpload">
                <img
                  src={loadedMovie.imgTitle}
                  alt=""
                  className="productUploadImg"
                />
                <label for="imgSm">
                  <Publish />
                </label>
                <input
                  type="file"
                  id="imgSm"
                  name="imgSm"
                  onChange={(e) => setImgSm(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div className="addProductItem">
              <label>Title</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                type="text"
                placeholder="description"
                name="desc"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Year</label>
              <input
                type="text"
                placeholder="year"
                name="year"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Genre</label>
              <input
                type="text"
                placeholder="genre"
                name="genre"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Duration</label>
              <input
                type="text"
                placeholder="duration"
                name="duration"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Limit</label>
              <input
                type="text"
                placeholder="limit"
                name="limit"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Is Series?</label>
              <select name="isSeries" id="active" onChange={handleChange}>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
            <div className="addProductItem">
              <label>Trailer</label>
              <div className="productUpload">
                <img
                  src={loadedMovie.imgTitle}
                  alt=""
                  className="productUploadImg"
                />
                <label for="trailer">
                  <Publish />
                </label>
                <input
                  type="file"
                  id="trailer"
                  name="trailer"
                  onChange={(e) => setTrailer(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div className="addProductItem">
              <label>Video</label>
              <div className="productUpload">
                <img
                  src={loadedMovie.video}
                  alt=""
                  className="productUploadImg"
                />
                <label for="video">
                  <Publish />
                </label>
                <input
                  type="file"
                  id="video"
                  name="video"
                  onChange={(e) => setVideo(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <>
              {uploaded === 5 ? (
                <button className="addProductButton" onClick={handleSubmit}>
                  Update
                </button>
              ) : (
                <button className="addProductButton" onClick={handleUpload}>
                  Upload
                </button>
              )}
            </>
          </form>
        </div>
      </div>
    </div>
  );
}
