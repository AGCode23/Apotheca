import React, { useState } from "react";
import { storage, db } from "../Config/Config";

export const AddProducts = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"]; // image types

  const imageHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setImageURL(selectedFile);
      setError("");
    } else {
      setImageURL(null);
      setError("Please select a valid image type (jpg or png)");
    }
  };

  // add product
  const addProduct = (e) => {
    e.preventDefault();
    const uploadTask = storage
      .ref(`product-images/${imageURL.name}`)
      .put(imageURL);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => setError(err.message),
      () => {
        storage
          .ref("product-images")
          .child(imageURL.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("product")
              .add({
                id: id,
                title: title,
                price: Number(price),
                imageURL: url,
                description: description,
              })
              .then(() => {
                setId("");
                setTitle("");
                setPrice(0);
                setImageURL("");
                setDescription("");
                setError("");
                document.getElementById("file").value = "";
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };

  return (
    <div className="container">
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h2>ADD PRODUCTS</h2>
        <hr />
        <form autoComplete="off" className="form-group" onSubmit={addProduct}>
          <label htmlFor="id">Product ID</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
          <br />
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <label htmlFor="description">Product Description</label>
          <textarea
            className="form-control"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <br />
          <label htmlFor="price">Product Price</label>
          <input
            type="number"
            className="form-control"
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <br />
          <label htmlFor="imageURL">Product Image</label>
          <input
            type="file"
            className="form-control"
            id="file"
            required
            onChange={imageHandler}
          />
          <br />
          <button type="submit" className="btn btn-success btn-md mybtn">
            ADD
          </button>
        </form>
        {error && <span className="error-msg">{error}</span>}
      </div>
    </div>
  );
};

export default AddProducts;
