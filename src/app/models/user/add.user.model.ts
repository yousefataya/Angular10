import { SignInModel } from "src/app/models/signIn.model";
import { UserModel } from "src/app/models/user/user.model";

export class AddUserModel extends UserModel {
    signIn!: SignInModel;
}
