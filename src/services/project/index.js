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
      "http://localhost:3000/api/admin/allProjects",
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
      `http://localhost:3000/api/admin/projectById?id=${id}`,
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
