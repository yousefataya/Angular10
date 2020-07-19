import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class AppCustomPreloader implements PreloadingStrategy {

    constructor() { }

    preload(route: Route, load: Function): Observable<any> {
        return route.data && route.data.preload ? this.loadRoute(route.data.delayTime, load) : of(null);
    }


    loadRoute(delayTime: number = 0, load: Function) {
        return delayTime
            ? timer(delayTime).pipe(flatMap(_ => load()))
            : load();
    }

}
