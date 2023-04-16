import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-operator',
  templateUrl: './register-operator.component.html',
  styleUrls: ['./register-operator.component.scss']
})
export class RegisterOperatorComponent {

  constructor(private builder: FormBuilder,
              private service: AuthService,
              private toastr: ToastrService,
              private router: Router) {
  }

  registerForm = this.builder.group({
    firstname: this.builder.control('', Validators.required),
    lastname: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    confirm_password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    is_active: this.builder.control(false)
  })


  registerOperator() {
    if (this.registerForm.valid) {
      this.service.registerOperator(this.registerForm.value).subscribe(res=>{
        this.toastr.success("Success");
        this.router.navigate(['login']);
      }, error => {
        console.log(error)
      });
    } else {
      this.toastr.warning("Please enter valida data.")
    }
  }
}
