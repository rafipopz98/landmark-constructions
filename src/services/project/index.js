//add product

// import Cookies from "js-cookie";

export const addProject = async (formData) => {
  try {
    const responses = await fetch("/api/admin/addProjects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await responses.json();
    return data;
  } catch (e) {
    console.log(`the errrror ${e}`);
  }
};

//get admin productss

export const getAllAdminProjects = async () => {
  try {
    const responses = await fetch(
      "https://landmarkconstructions.vercel.app/api/admin/allProjects",
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await responses.json();
    return data;
  } catch (e) {
    console.log(`the errrror ${e}`);
  }
};

//by id

export const projectBYYId = async (id) => {
  try {
    const res = await fetch(
      `https://landmarkconstructions.vercel.app/admin/projectById?id=${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("errrorr while reading productBYCategory", e);
  }
};

//deleete

export const deleteProduct = async (id) => {
  try {
    const res = await fetch(`/api/admin/deleteProject?id=${id}`, {
      method: "DELETE",
      headers: {
        // Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

//update

export const updateProject = async (formData) => {
  try {
    const res = await fetch("/api/admin/updateProject", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // Authorization: `Bearer ${Cookies.get("token")}`,
      },
      cache: "no-store",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
