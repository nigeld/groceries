"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../shared/user/user");
var user_service_1 = require("../shared/services/user.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User;
        this.user.email = "nigel@un.com";
        this.user.password = "12345678";
    }
    LoginComponent.prototype.ngOnInit = function () {
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
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFFbEQsNENBQTJDO0FBQzNDLGdFQUE4RDtBQUU5RCwwQ0FBeUM7QUFRekMsSUFBYSxjQUFjO0lBSTFCLHdCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRnBFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUVHLENBQUM7SUFFSiwrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBTUM7UUFMQSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQy9CLFNBQVMsQ0FDVCxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxFQUN0QyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxFQUF0RCxDQUFzRCxDQUNqRSxDQUFDO0lBQ0osQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDakMsU0FBUyxDQUNSO1lBQ0UsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7WUFDN0MsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFDRCxjQUFNLE9BQUEsS0FBSyxDQUFDLCtDQUErQyxDQUFDLEVBQXRELENBQXNELENBQzdELENBQUM7SUFDTixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDRixxQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxDQUFDO0tBQ25ELENBQUM7cUNBSzJCLGVBQU0sRUFBdUIsMEJBQVc7R0FKeEQsY0FBYyxDQTRDMUI7QUE1Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9naW4tY29tbW9uLmNzc1wiLCBcIi4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7IFxyXG5cdHVzZXIgOiBVc2VyO1xyXG5cdGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2Upe1xyXG5cdFx0dGhpcy51c2VyID0gbmV3IFVzZXI7XHJcblx0XHR0aGlzLnVzZXIuZW1haWwgPSBcIm5pZ2VsQHVuLmNvbVwiO1xyXG5cdFx0dGhpcy51c2VyLnBhc3N3b3JkID0gXCIxMjM0NTY3OFwiO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuXHRzdWJtaXQoKSB7XHJcblx0ICBpZiAodGhpcy5pc0xvZ2dpbmdJbil7XHJcblx0ICBcdHRoaXMubG9naW4oKTtcclxuXHQgIH1lbHNle1xyXG5cdCAgXHR0aGlzLnNpZ25VcCgpO1xyXG5cdCAgfVxyXG5cdH1cclxuXHJcblx0bG9naW4oKSB7XHJcblx0XHR0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaXRlbXNcIl0pLFxyXG5cdFx0XHRcdChlcnJvcikgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIilcclxuXHRcdFx0KTtcclxuXHR9XHJcblxyXG5cdHNpZ25VcCgpIHtcclxuXHQgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG5cdCAgICAuc3Vic2NyaWJlKFxyXG5cdCAgICAgICgpID0+IHtcclxuXHQgICAgICAgIGFsZXJ0KFwiVHUgY3VlbnRhIGZ1ZSBjcmVhZGEgY29ycmVjdGFtZW50ZS5cIik7XHJcblx0ICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcclxuXHQgICAgICB9LFxyXG5cdCAgICAgICgpID0+IGFsZXJ0KFwiRGVzYWZvcnR1bmFkYW1lbnRlIG5vIHB1ZGltb3MgY3JlYXIgdHUgY3VlbnRhXCIpXHJcblx0ICAgICk7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVEaXNwbGF5KCkge1xyXG5cdCAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG5cdH1cclxufSJdfQ==