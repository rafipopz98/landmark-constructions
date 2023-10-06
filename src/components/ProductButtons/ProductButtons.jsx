"use client";
import { GlobalContext } from "@/context";
import { deleteProduct } from "@/services/project";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import ComponentLevelLoader from "../Loader/componentLevel";

const ProductButtons = ({ item }) => {
  const {
    setCurrentUpdatedProduct,
    setComponentLevelLoader,
    componentLevelLoader,
  } = useContext(GlobalContext);
  const router = useRouter();
  async function handleDelete(item) {
    setComponentLevelLoader({ loading: true, id: item._id });
    const res = await deleteProduct(item._id);
    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      router.refresh();
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: "" });
    }
  }

  return (
    <div className="uWuButtonsSingle">
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => {
          setCurrentUpdatedProduct(item);
          router.push("/addprojects-landmark");
        }}
      >
        UPDATE
      </button>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => handleDelete(item)}
      >
        {componentLevelLoader &&
        componentLevelLoader.loading &&
        item._id === componentLevelLoader.id ? (
          <ComponentLevelLoader
            text={"Deleting Product"}
            color={"#ffffff"}
            loading={componentLevelLoader && componentLevelLoader.loading}
          />
        ) : (
          "DELETE"
        )}
      </button>
    </div>
  );
};

export default ProductButtons;
