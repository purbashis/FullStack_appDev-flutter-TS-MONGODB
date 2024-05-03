import mongoose, { Schema } from "mongoose";
import { IUserInterface } from "../interfaces/user.interface";

const userSchema = new Schema<IUserInterface>({
    uid: {
        type: String,
        required: true,
       
    },
    tweets: { type: [String], default: [] },
    firstName: { type: String, default: "User" },
    lastName: { type: String, default: "Name" },
    email: { type: String, required: true },
    createdAt: { type: String, required: true },

});

const UserModel = mongoose.model<IUserInterface>("User", userSchema);
export default UserModel;