import { Component, OnInit } from "@angular/core";

import { User } from "../shared/user/user";
import { UserService } from "../shared/services/user.service";

import { Router } from "@angular/router";

@Component({
    selector: "ns-login",
    templateUrl: "login.component.html",
    moduleId: module.id,
    styleUrls: ["./login-common.css", "./login.css"]
})
export class LoginComponent { 
	user : User;
	isLoggingIn = true;

	constructor(private router: Router, private userService: UserService){
		this.user = new User;
		this.user.email = "nigel@un.com";
		this.user.password = "12345678";
	}

	ngOnInit(): void {
      
    }

	submit() {
	  if (this.isLoggingIn){
	  	this.login();
	  }else{
	  	this.signUp();
	  }
	}

	login() {
		this.userService.login(this.user)
			.subscribe(
				() => this.router.navigate(["/items"]),
				(error) => alert("Unfortunately we could not find your account.")
			);
	}

	signUp() {
	  this.userService.register(this.user)
	    .subscribe(
	      () => {
	        alert("Tu cuenta fue creada correctamente.");
	        this.toggleDisplay();
	      },
	      () => alert("Desafortunadamente no pudimos crear tu cuenta")
	    );
	}

	toggleDisplay() {
	  this.isLoggingIn = !this.isLoggingIn;
	}
}