import { Injectable } from "@angular/core";
@Injectable({ providedIn: "root" })
export class AppModalService {
    alert(message: string): void {
        alert(message);  
    }
}
