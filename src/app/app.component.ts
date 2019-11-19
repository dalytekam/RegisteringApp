import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserSumary } from "./user.model";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild("f", { static: false }) myForm: NgForm;
  title = "Registering App";
  genders = ["Male", "Female", "Transgender"];
  statuses = ["Citizen", "No-Citizen", "Veterand"];
  submitted = false;
  citizens: UserSumary[] = [];
  picture: string = "./assets/p1.png";

  onSubmit() {
    const citizen = new UserSumary(
      this.myForm.value.nameandemail.name,
      this.myForm.value.nameandemail.emailadress,
      this.myForm.value.gender,
      this.myForm.value.status
    );

    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
    }, 3000);
    this.citizens.push(citizen);
    this.myForm.reset();
  }
  suggestName() {
    const ppsn: string = "daly";
    this.myForm.form.patchValue({
      nameandemail: {
        name: ppsn
      }
    });
    //console.log(this.myForm.form);
  }
}
