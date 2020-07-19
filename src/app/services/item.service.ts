import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppTokenService } from "src/app/core/services/token.service";
import { TokenModel } from "src/app/models/token.model";
import { AddUserModel } from "src/app/models/user/add.user.model";
import { UpdateUserModel } from "src/app/models/user/update.user.model";
import { UserModel } from "src/app/models/user/user.model";
import { ItemModel } from "src/app/models/Item.model";
import { map, tap } from "rxjs/operators";
import * as $ from 'jquery';


@Injectable({ providedIn: "root" })
export class AddItemService {
    itemModel: ItemModel;

    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly appTokenService: AppTokenService) { }


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

    addItem(itemModel: ItemModel): void {
        this.http
            .post<TokenModel>(`Items/Add`, itemModel)
            .subscribe((tokenModel) => {
                if (!tokenModel || !tokenModel.access_token) { return; }
                this.appTokenService.set(tokenModel.access_token);
                this.router.navigate(["/main/home"]);
            });
    }

    updateItem(itemModel: ItemModel, id: string): void {
        this.http.post<TokenModel>(`Items/Update/${id}`, itemModel).pipe(
            map(response => response),
            tap(data => console.log("Update Arrya", data))
        ).subscribe((data: any) => {
            if (!data || !data.token) { return; }
            this.appTokenService.set(data.token);
            var req = JSON.stringify(data);
            var response = JSON.parse(req);

            var idCard;
            var createDate;
            var equipements;
            var fullName;
            var catogries;
            

            this.itemModel = new ItemModel();
            $.each(response, function (key, value) {

                if (key == "equipements") {
                    equipements = value;
                }

                else if (key == "fullName") {
                    fullName = value;
                }

                else if (key == "catogries") {
                    catogries = value;
                }

                else if (key == "idCard") {
                    idCard = value;
                }

                else if (key == "createDate") {
                    createDate = value;
                }
               
                console.log("Value : " + value);
            })

            this.itemModel.idCard = idCard;
            this.itemModel.createDate = createDate;
            this.itemModel.equipements = equipements;
            this.itemModel.fullName =  fullName;
            this.itemModel.catogries = catogries;

        });
    }

    update(updateUserModel: UpdateUserModel) {
        return this.http.put(`Users/${updateUserModel.userId}`, updateUserModel);
    }
}
