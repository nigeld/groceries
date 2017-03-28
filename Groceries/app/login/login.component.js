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
    __metadata("design:paramtypes", [user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFFbEQsNENBQTJDO0FBQzNDLGdFQUE4RDtBQVE5RCxJQUFhLGNBQWM7SUFJMUIsd0JBQW9CLFdBQXlCO1FBQXpCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBRjdDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUVHLENBQUM7SUFFSiwrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFFRCw4QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDakMsU0FBUyxDQUNSO1lBQ0UsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7WUFDN0MsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFDRCxjQUFNLE9BQUEsS0FBSyxDQUFDLCtDQUErQyxDQUFDLEVBQXRELENBQXNELENBQzdELENBQUM7SUFDTixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDRixxQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxDQUFDO0tBQ25ELENBQUM7cUNBS2lDLDBCQUFXO0dBSmpDLGNBQWMsQ0F3QzFCO0FBeENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtbG9naW5cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImxvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCIuL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgeyBcclxuXHR1c2VyIDogVXNlcjtcclxuXHRpc0xvZ2dpbmdJbiA9IHRydWU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2UgOiBVc2VyU2VydmljZSl7XHJcblx0XHR0aGlzLnVzZXIgPSBuZXcgVXNlcjtcclxuXHRcdHRoaXMudXNlci5lbWFpbCA9IFwibmlnZWxAbmQuY29tXCI7XHJcblx0XHR0aGlzLnVzZXIucGFzc3dvcmQgPSBcIjEyMzQ1Njc4XCI7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG5cdHN1Ym1pdCgpIHtcclxuXHQgIGlmICh0aGlzLmlzTG9nZ2luZ0luKXtcclxuXHQgIFx0dGhpcy5sb2dpbigpO1xyXG5cdCAgfWVsc2V7XHJcblx0ICBcdHRoaXMuc2lnblVwKCk7XHJcblx0ICB9XHJcblx0fVxyXG5cclxuXHRsb2dpbigpe1xyXG5cclxuXHR9XHJcblxyXG5cdHNpZ25VcCgpIHtcclxuXHQgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG5cdCAgICAuc3Vic2NyaWJlKFxyXG5cdCAgICAgICgpID0+IHtcclxuXHQgICAgICAgIGFsZXJ0KFwiVHUgY3VlbnRhIGZ1ZSBjcmVhZGEgY29ycmVjdGFtZW50ZS5cIik7XHJcblx0ICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcclxuXHQgICAgICB9LFxyXG5cdCAgICAgICgpID0+IGFsZXJ0KFwiRGVzYWZvcnR1bmFkYW1lbnRlIG5vIHB1ZGltb3MgY3JlYXIgdHUgY3VlbnRhXCIpXHJcblx0ICAgICk7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVEaXNwbGF5KCkge1xyXG5cdCAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG5cdH1cclxufSJdfQ==