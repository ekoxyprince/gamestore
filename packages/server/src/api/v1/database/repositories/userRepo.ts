import UserModel, { type UserRequestDTO } from "../models/user.js";

interface QueryFilter {
  [key: string]: any;
}

export default class UserRepository {
  create(user: UserRequestDTO) {
    return UserModel.create(user);
  }
  findAll(filter?: QueryFilter) {
    return UserModel.find(filter!);
  }
  findOne(filter?: QueryFilter) {
    return UserModel.findOne(filter!);
  }
  findOneById(id: string) {
    return UserModel.findById(id);
  }
}
