import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["login/login-common.css", "login/login.css"]
})
export class AppComponent { 
	email : string = "nigel@ideveloper.co";
	isLoggingIn = true;

	submit() {
	  alert("You’re using: " + this.email);
	}
	toggleDisplay() {
	  this.isLoggingIn = !this.isLoggingIn;
	}
}
