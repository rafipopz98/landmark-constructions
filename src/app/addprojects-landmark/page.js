"use client";
import React, { useContext, useEffect, useState } from "react";
import "./AddProduct.css";
import { firebaseConfig, firebaseStorage } from "./firebase";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
const AdminViewAddProduct = () => {
  let name, value;

  const [formData, setFormData] = useState({
    images: [],
    name: "",
    desc: "",
    bed: "",
    room: "",
  });

  const inputHandle = (e) => {
    name = e.target.name;
    value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app, firebaseStorage);

  const createUniqueFileName = (getFile) => {
    const timeStamp = Date.now();
    const randomStringValue = Math.random().toString(36).substring(2, 12);

    return `${getFile.name}-${timeStamp}-${randomStringValue}`;
  };

  async function helperForUPloadingImageToFirebase(file) {
    const getFileName = createUniqueFileName(file);
    const storageReference = ref(storage, `ecommerce/${getFileName}`);
    const uploadImage = uploadBytesResumable(storageReference, file);

    return new Promise((resolve, reject) => {
      uploadImage.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadImage.snapshot.ref)
            .then((downloadUrl) => resolve(downloadUrl))
            .catch((error) => reject(error));
        }
      );
    });
  }
  const handleImages = async (event) => {
    const files = event.target.files;
    const imageUrls = [];
  
    for (let i = 0; i < files.length; i++) {
      const imageUrl = await helperForUPloadingImageToFirebase(files[i]);
      if (imageUrl !== "") {
        imageUrls.push(imageUrl);
      }
    }
  
    if (imageUrls.length > 0) {
      setFormData({
        ...formData,
        images: imageUrls, // Update the 'images' property with the array of image URLs.
      });
    }
  };
  
  const submit = () => {
    console.log(formData);
    console.log(formData.images);
  };
  return (
    <div className="container_addProducts">
      <input
        // accept="image"
        name="image"
        id="image"
        size="1000000"
        type="file"
        multiple
        // value={formData.image}
        onChange={handleImages}
      />
      <input
        type="text"
        id="name"
        value={formData.name}
        name="name"
        placeholder="Enter Project Name / Title"
        onChange={inputHandle}
      />

      <textarea
        type="text"
        id="desc"
        value={formData.desc}
        name="desc"
        placeholder="Enter Description"
        onChange={inputHandle}
      />
      <input
        type="number"
        id="bed"
        value={formData.bed}
        name="bed"
        placeholder="Enter No of Bedrooms"
        onChange={inputHandle}
      />
      <input
        type="text"
        id="room"
        value={formData.room}
        name="room"
        placeholder="1bhk/2bhk/3bhk...."
        onChange={inputHandle}
      />
      <button onClick={submit}>Add Product</button>
    </div>
  );
};

export default AdminViewAddProduct;
