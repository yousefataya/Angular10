import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Connection } from 'openvidu-browser';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';


@Injectable()
export class AuthenticationService {

    private baseUrl  = "http://localhost:7070/";
    private urlLogIn = this.baseUrl+'api-logIn';
    private urlLogOut = this.baseUrl+'api-logOut';

    public token: string;
    private user: User;
    role: String;

    constructor(private http: Http, private router: Router) {
        this.reqIsLogged();

        // set token if saved in local storage
        // let auth_token = JSON.parse(localStorage.getItem('auth_token'));
        // this.token = auth_token && auth_token.token;
    }

    logIn(user: string, pass: string) {

        console.log('Login service started...');

        const userPass = utf8_to_b64(user + ':' + pass);
        const headers = new Headers({
            'Authorization': 'Basic ' + userPass,
            'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ headers });

        return this.http.get(this.urlLogIn, options)
            .pipe(
                map(response => {
                    this.processLogInResponse(response);
                    return this.user;
                }),
                catchError(error => Observable.throw(error))
            );
    }

    logOut() {

        console.log('Logging out...');

        return this.http.get(this.urlLogOut)
            .pipe(
                map(response => {
                    console.log('Logout succesful!');

                    this.user = null;
                    this.role = null;

                    // clear token remove user from local storage to log user out and navigates to welcome page
                    this.token = null;
                    localStorage.removeItem('login');
                    localStorage.removeItem('rol');
                    this.router.navigate(['']);

                    return response;
                }),
                catchError(error => Observable.throw(error))
            );
    }

    directLogOut() {
        this.logOut().subscribe(
            _response => { },
            error => console.log('Error when trying to log out: ' + error)
        );
    }

    private processLogInResponse(response:any) {
        // Correctly logged in
        console.log('Login succesful processing...');

        this.user = (response.json() as User);

        localStorage.setItem('login', 'OPENVIDUAPP');
        if (this.user.roles.indexOf('ROLE_TEACHER') !== -1) {
            this.role = 'ROLE_TEACHER';
            localStorage.setItem('rol', 'ROLE_TEACHER');
        }
        if (this.user.roles.indexOf('ROLE_STUDENT') !== -1) {
            this.role = 'ROLE_STUDENT';
            localStorage.setItem('rol', 'ROLE_STUDENT');
        }
    }

    reqIsLogged() {

        console.log('ReqIsLogged called');

        const headers = new Headers({
            'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ headers });

        this.http.get(this.urlLogIn, options)
            .pipe(
                map(response => this.processLogInResponse(response))
            );
    }

    checkCredentials() {
        if (!this.isLoggedIn()) {
            this.logOut();
        }
    }

    isLoggedIn() {
        return ((this.user != null) && (this.user !== undefined));
    }

    getCurrentUser() {
        return this.user;
    }

    isTeacher() {
        return ((this.user.roles.indexOf('ROLE_TEACHER')) !== -1) && (localStorage.getItem('rol') === 'ROLE_TEACHER');
    }

    isStudent() {
        return ((this.user.roles.indexOf('ROLE_STUDENT')) !== -1) && (localStorage.getItem('rol') === 'ROLE_STUDENT');
    }

    updateUserLessons(lessons:any) {
        this.getCurrentUser().lessons = lessons;
    }

    connectionBelongsToTeacher(connection: Connection) {
        return connection.data.indexOf('teacher@gmail.com') > -1;
    }
}

function utf8_to_b64(str:any) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_match:any, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}
