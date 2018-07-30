import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Customer } from './../models/customer';
import {PremiumcalcService} from '../services/premiumcalc.service';



@Component({
  selector: 'app-premium-calculator',
  templateUrl: './premium-calculator.component.html',
  styleUrls: ['./premium-calculator.component.css']
})
export class PremiumCalculatorComponent implements OnInit {

  premiumForm: FormGroup;
  customer: Customer;
  arrGender: string[] = ['Male', 'Female'];
  isEligible: boolean;
  premiumAmount: number;


  constructor(private premiumcalcService: PremiumcalcService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createPremiumForm();
    this.isEligible = false;
  }

  createPremiumForm() {
    this.premiumForm = this.fb.group({
      Name: ['', [Validators.required]],
      DOB: ['', Validators.required],
      Gender: ['male']
    });
  }

  CalculatePremium() {
    this.customer = Object.assign({}, this.premiumForm.value);
    this.premiumcalcService.getPremiumDetails(this.customer).subscribe(
      data => {
        this.isEligible = data.IsEligible;
        this.premiumAmount = data.PremiumAmount;
      }, error => {
      });
  }

  onFormSubmit(action) {
    if (this.premiumForm.valid) {
      this.customer = Object.assign({}, this.premiumForm.value);
    }
    if (action === 'calc') {
      this.CalculatePremium();
    }
  }
  // This method associate to Bootstrap dropdown selection change.
  onChangeGender(gender: string) {
    // Assign corresponding selected gender to model.
    this.customer.Gender = gender;
  }
}
