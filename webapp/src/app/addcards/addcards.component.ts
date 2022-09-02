import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-addcards',
  templateUrl: './addcards.component.html',
  styleUrls: ['./addcards.component.css']
})
export class AddcardsComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  errormsg: any;
  successmsg: any;
  getparamid: any;
  ngOnInit(): void {
  }



  userForm = new FormGroup({
    'datepick': new FormControl('',Validators.required),
    'worktypeselect': new FormControl('',Validators.required),
    'premise': new FormControl('',Validators.required),
    'address': new FormControl('',Validators.required),
    'session': new FormControl('',Validators.required),
    'remarks': new FormControl('',Validators.required),
    'cardurl': new FormControl('',Validators.required),
  });

  userSubmit(){
    // console.log(typeof(this.userForm.value['datepick'].toISOString().substring(0, 10)))
    // console.log(this.userForm.value['datepick'].toISOString().substring(0, 10))

    // this.userForm.value['datepick'] = this.userForm.value['datepick'].toISOString().substring(0, 10)
    this.userForm.value['datepick'] = this.userForm.value['datepick'].toISOString()

    console.log(this.userForm.value['datepick'])
    if(this.userForm.valid){
      // this.service.createData(this.userForm.value).subscribe((res) => {
      //   this.userForm.reset();
      //   this.successmsg = 'input successful?';
      // })
    }
    else {
      this.errormsg = 'Please input fields correctly!'
    }
  }



  clearForm() {
    this.userForm.reset();
    console.log('form cleared')
  }
}
