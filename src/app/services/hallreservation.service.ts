import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppTokenService } from "src/app/core/services/token.service";
import { TokenModel } from "src/app/models/token.model";
import { AddUserModel } from "src/app/models/user/add.user.model";
import { UpdateUserModel } from "src/app/models/user/update.user.model";
import { UserModel } from "src/app/models/user/user.model";
import { HallModel } from "src/app/models/Hall.model";
import { map, tap } from "rxjs/operators";
@Injectable({ providedIn: "root" })
export class AddHallService {
    hallModel: HallModel;
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

    addItem(hallModel: HallModel): void {
        this.http
            .post<TokenModel>(`Halls/Add`, hallModel)
            .subscribe((tokenModel) => {
                if (!tokenModel || !tokenModel.access_token) { return; }
                this.appTokenService.set(tokenModel.access_token);
                this.router.navigate(["/main/home"]);
            });
    }

    updateItem(hallModel: HallModel, id: string): void {
        this.http.post<TokenModel>(`Halls/Update/${id}`, hallModel).pipe(
            map(response => response),
            tap(data => console.log("Update Arrya", data))
        ).subscribe((data: any) => {
            if (!data || !data.token) { return; }
            this.appTokenService.set(data.token);
            /*var req = JSON.stringify(data);
            var response = JSON.parse(req);*/
            /*var itemName;
            var minNum;
            var catogryId;
            var isExist;
            var maxNum;
            var description;
            var createDate;*/
            this.hallModel = new HallModel();
            /*$.each(response, function (key, value) {

                if (key == "itemName") {
                    itemName = value;
                }
                else if (key == "minNum") {
                    minNum = value;
                } else if (key == "maxNum") {
                    maxNum = value;
                }
                else if (key == "description") {
                    description = value;
                } else if (key == "catogryId") {
                    catogryId = value;
                }
                else if (key == "isExist") {
                    isExist = value;
                }
                if (key == "createDate") {
                    createDate = value;
                }
                console.log("Value : " + value);
            })*/

            /*this.itemModel.CatogryId = catogryId;
            this.itemModel.CreateDate = createDate;
            this.itemModel.Description = description;
            this.itemModel.ItemName = itemName;
            this.itemModel.MaxNum = maxNum;
            this.itemModel.MinNum = minNum;
            this.itemModel.IsExist = isExist;*/


        });
    }

    update(updateUserModel: UpdateUserModel) {
        return this.http.put(`Users/${updateUserModel.userId}`, updateUserModel);
    }
}
