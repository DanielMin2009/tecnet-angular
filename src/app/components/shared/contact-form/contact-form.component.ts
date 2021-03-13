import {
  Component,
  OnInit
} from "@angular/core";
import {
  FormBuilder, FormGroup,

  Validators
} from "@angular/forms";
import Swal from "sweetalert2";
import { MessageService } from "../../../services/message.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  myForm: FormGroup;

  emailRegEx: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';

  constructor(public messageService: MessageService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.myForm = this.fb.group(
      {
        txtName: ['', Validators.required],
        txtCompany: [''],
        txtSector: [''],
        txtEmail: ['', [Validators.required, Validators.pattern(this.emailRegEx)]],
        txtPhone: ['', Validators.required],
        txtMaterial: [''],
        txtSize: [''],
        txtQuantity: ['', Validators.required],
        txtDirt: [''],
        txtComments : ['', Validators.required],
      }
    );
  }

  sendForm() {
    console.log(this.myForm);
    if ( this.myForm.invalid ) {
      return Object.values( this.myForm.controls ).forEach( control => {     
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }        
      });
    }


      this.messageService.sendMessage(this.myForm.value).subscribe(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El mensaje se ha enviado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    
  }
}
