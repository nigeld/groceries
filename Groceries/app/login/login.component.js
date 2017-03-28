"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../shared/user/user");
var user_service_1 = require("../shared/services/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User;
        this.user.email = "nigel@un.com";
        this.user.password = "12345678";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/items"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Tu cuenta fue creada correctamente.");
            _this.toggleDisplay();
        }, function () { return alert("Desafortunadamente no pudimos crear tu cuenta"); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "ns-login",
        templateUrl: "login.component.html",
        moduleId: module.id,
        styleUrls: ["./login-common.css", "./login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFFbEQsNENBQTJDO0FBQzNDLGdFQUE4RDtBQUU5RCwwQ0FBeUM7QUFFekMsZ0NBQStCO0FBUS9CLElBQWEsY0FBYztJQUkxQix3QkFBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsSUFBVTtRQUFwRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnhGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQU1DO1FBTEEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQ1QsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBaEMsQ0FBZ0MsRUFDdEMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsK0NBQStDLENBQUMsRUFBdEQsQ0FBc0QsQ0FDakUsQ0FBQztJQUNKLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2pDLFNBQVMsQ0FDUjtZQUNFLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxFQUF0RCxDQUFzRCxDQUM3RCxDQUFDO0lBQ04sQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDO0FBN0NZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLGFBQWEsQ0FBQztLQUNuRCxDQUFDO3FDQUsyQixlQUFNLEVBQXVCLDBCQUFXLEVBQWdCLFdBQUk7R0FKNUUsY0FBYyxDQTZDMUI7QUE3Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWxvZ2luXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJsb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi1jb21tb24uY3NzXCIsIFwiLi9sb2dpbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgXHJcblx0dXNlciA6IFVzZXI7XHJcblx0aXNMb2dnaW5nSW4gPSB0cnVlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKXtcclxuXHRcdHRoaXMudXNlciA9IG5ldyBVc2VyO1xyXG5cdFx0dGhpcy51c2VyLmVtYWlsID0gXCJuaWdlbEB1bi5jb21cIjtcclxuXHRcdHRoaXMudXNlci5wYXNzd29yZCA9IFwiMTIzNDU2NzhcIjtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19sb2dpblwiO1xyXG5cdH1cclxuXHJcblx0c3VibWl0KCkge1xyXG5cdCAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pe1xyXG5cdCAgXHR0aGlzLmxvZ2luKCk7XHJcblx0ICB9ZWxzZXtcclxuXHQgIFx0dGhpcy5zaWduVXAoKTtcclxuXHQgIH1cclxuXHR9XHJcblxyXG5cdGxvZ2luKCkge1xyXG5cdFx0dGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2l0ZW1zXCJdKSxcclxuXHRcdFx0XHQoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpXHJcblx0XHRcdCk7XHJcblx0fVxyXG5cclxuXHRzaWduVXAoKSB7XHJcblx0ICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcclxuXHQgICAgLnN1YnNjcmliZShcclxuXHQgICAgICAoKSA9PiB7XHJcblx0ICAgICAgICBhbGVydChcIlR1IGN1ZW50YSBmdWUgY3JlYWRhIGNvcnJlY3RhbWVudGUuXCIpO1xyXG5cdCAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcblx0ICAgICAgfSxcclxuXHQgICAgICAoKSA9PiBhbGVydChcIkRlc2Fmb3J0dW5hZGFtZW50ZSBubyBwdWRpbW9zIGNyZWFyIHR1IGN1ZW50YVwiKVxyXG5cdCAgICApO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlRGlzcGxheSgpIHtcclxuXHQgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuXHR9XHJcbn0iXX0=