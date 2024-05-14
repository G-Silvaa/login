import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { AddIconModule } from "src/app/shared/icons/Icon.module";
import { InputModule } from "./Components/Input/input.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    
    AddIconModule,
  ],
})
export class LoginModule {}
