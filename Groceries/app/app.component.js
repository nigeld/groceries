"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = "nigel@ideveloper.co";
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert("You’re using: " + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html",
        styleUrls: ["login/login-common.css", "login/login.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQU8xQyxJQUFhLFlBQVk7SUFMekI7UUFNQyxVQUFLLEdBQVkscUJBQXFCLENBQUM7UUFDdkMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7SUFRcEIsQ0FBQztJQU5BLDZCQUFNLEdBQU47UUFDRSxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxvQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUNGLG1CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLGlCQUFpQixDQUFDO0tBQzNELENBQUM7R0FDVyxZQUFZLENBVXhCO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJsb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG5cdGVtYWlsIDogc3RyaW5nID0gXCJuaWdlbEBpZGV2ZWxvcGVyLmNvXCI7XG5cdGlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuXHRzdWJtaXQoKSB7XG5cdCAgYWxlcnQoXCJZb3XigJlyZSB1c2luZzogXCIgKyB0aGlzLmVtYWlsKTtcblx0fVxuXHR0b2dnbGVEaXNwbGF5KCkge1xuXHQgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcblx0fVxufVxuIl19