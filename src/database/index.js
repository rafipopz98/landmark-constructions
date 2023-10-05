import mongoose from "mongoose";

const connectionDb = async () => {
  console.log("hii outside db");

  const DbUrl =
    "mongodb+srv://rafi:rafi@landmarkconstruction.te0jggf.mongodb.net/";
  // const DbUrl='mongodb://localhost:27017/users'
  mongoose
    .connect(DbUrl)
    .then(() => {
      console.log("connected to database");
      return;
    })
    .catch((e) => {
      console.log(`errrorrr ${e.message}`);
      return;
    });
};
// module.exports = { connectionDb };
export  {connectionDb};
