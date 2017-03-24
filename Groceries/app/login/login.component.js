"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../shared/user/user");
var user_service_1 = require("../shared/services/user.service");
var LoginComponent = (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User;
        this.user.email = "nigel@nd.com";
        this.user.password = "12345678";
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
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
        providers: [user_service_1.UserService],
        styleUrls: ["login/login-common.css", "login/login.css"]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMEM7QUFFMUMsNENBQTJDO0FBQzNDLGdFQUE4RDtBQVE5RCxJQUFhLGNBQWM7SUFJMUIsd0JBQW9CLFdBQXlCO1FBQXpCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBRjdDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBRUQsOEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2pDLFNBQVMsQ0FDUjtZQUNFLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxFQUF0RCxDQUFzRCxDQUM3RCxDQUFDO0lBQ04sQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxpQkFBaUIsQ0FBQztLQUMzRCxDQUFDO3FDQUtpQywwQkFBVztHQUpqQyxjQUFjLENBb0MxQjtBQXBDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICAgIHN0eWxlVXJsczogW1wibG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcImxvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgeyBcclxuXHR1c2VyIDogVXNlcjtcclxuXHRpc0xvZ2dpbmdJbiA9IHRydWU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2UgOiBVc2VyU2VydmljZSl7XHJcblx0XHR0aGlzLnVzZXIgPSBuZXcgVXNlcjtcclxuXHRcdHRoaXMudXNlci5lbWFpbCA9IFwibmlnZWxAbmQuY29tXCI7XHJcblx0XHR0aGlzLnVzZXIucGFzc3dvcmQgPSBcIjEyMzQ1Njc4XCI7XHJcblx0fVxyXG5cclxuXHRzdWJtaXQoKSB7XHJcblx0ICBpZiAodGhpcy5pc0xvZ2dpbmdJbil7XHJcblx0ICBcdHRoaXMubG9naW4oKTtcclxuXHQgIH1lbHNle1xyXG5cdCAgXHR0aGlzLnNpZ25VcCgpO1xyXG5cdCAgfVxyXG5cdH1cclxuXHJcblx0bG9naW4oKXtcclxuXHJcblx0fVxyXG5cclxuXHRzaWduVXAoKSB7XHJcblx0ICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcclxuXHQgICAgLnN1YnNjcmliZShcclxuXHQgICAgICAoKSA9PiB7XHJcblx0ICAgICAgICBhbGVydChcIlR1IGN1ZW50YSBmdWUgY3JlYWRhIGNvcnJlY3RhbWVudGUuXCIpO1xyXG5cdCAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcblx0ICAgICAgfSxcclxuXHQgICAgICAoKSA9PiBhbGVydChcIkRlc2Fmb3J0dW5hZGFtZW50ZSBubyBwdWRpbW9zIGNyZWFyIHR1IGN1ZW50YVwiKVxyXG5cdCAgICApO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlRGlzcGxheSgpIHtcclxuXHQgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuXHR9XHJcbn0iXX0=