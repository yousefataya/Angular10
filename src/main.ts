import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "src/app/app.module";
import { environment } from "src/environments/environment";

if (environment.enableProdMode) { enableProdMode(); }
platformBrowserDynamic().bootstrapModule(AppModule);
