import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AddUserModel } from "src/app/models/user/add.user.model";
import { UpdateUserModel } from "src/app/models/user/update.user.model";
import { UserModel } from "src/app/models/user/user.model";
import { CatogryListModel } from "src/app/models/ListCatogry.model";
import { Subscription } from "rxjs";
@Injectable({ providedIn: "root" })
export class CatogryListService {
    employees: CatogryListModel;
    subscription: Subscription;
    Cats: any[] = [];
     CatsBackUp: any[] = [];
    constructor(
        private readonly http: HttpClient) { }

    add(addUserModel: AddUserModel) {
        return this.http.post<number>(`Users`, addUserModel);
    }

    delete(userId: number) {
        return this.http.delete(`Users/${userId}`);
    }

    list() {
        return this.http.get<UserModel[]>(`Users`);
    }

    select(userId: number) {
        return this.http.get<UserModel>(`Users/${userId}`);
    }

    fill(): string[] {
        return this.CatsBackUp;
    }

    search() : string[] {
        this.subscription = this.http.get<string>(`Catogries/List`).subscribe(data => {
            for (let value of data) {
                console.log(value);
                this.Cats.push(value);
            }
            this.CatsBackUp = this.Cats;
            console.log("LengthCatsBackUp : " + this.CatsBackUp.length);
            return this.Cats;
        });
        return this.Cats;
    }
    /*ngOnDestroy() {
        this.subscription.unsubscribe();
    }*/
    update(updateUserModel: UpdateUserModel) {
        return this.http.put(`Users/${updateUserModel.userId}`, updateUserModel);
    }
}
