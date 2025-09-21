import {
  Document,
  Schema,
  model,
  Model,
  type ObjectId,
  type CallbackError,
} from "mongoose";
import bcrypt from "bcryptjs";
export enum Role {
  USER = "user",
  ADMIN = "admin",
}
export type UserRequestDTO = {
  fullname: string;
  email: string;
  password: string;
};
export interface IUserDoc extends Document {
  fullname: string;
  email: string;
  password: string;
  role: string;
  likedGames: { game: ObjectId }[];
}
const UserSchema: Schema<IUserDoc> = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: [Role.USER, Role.ADMIN],
    default: Role.USER,
  },
  likedGames: [
    {
      game: {
        type: Schema.Types.ObjectId,
        ref: "Game",
      },
    },
  ],
});
UserSchema.pre("save", async function (next) {
  try {
    if (this.isNew || this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 12);
    }
    next();
  } catch (error) {
    next(error as CallbackError);
  }
});
const UserModel: Model<IUserDoc> = model<IUserDoc>("User", UserSchema);
export default UserModel;
