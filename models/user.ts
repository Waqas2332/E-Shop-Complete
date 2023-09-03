import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please Provide an email"],
  },
  password: {
    type: String,
    required: [true, "Please Provide a password"],
  },
  address: {
    type: String,
    required: [true, "Please Provide your address"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
