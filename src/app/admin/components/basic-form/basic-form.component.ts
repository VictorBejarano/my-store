import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buidForm();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log('Este curso es increible');
  }

  save() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private buidForm() {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: ['#000000'],
      date: [''],
      age: [12, [Validators.required, Validators.min(18), Validators.max(100)]],
      category: ['category-2'],
      tag: [''],
      agree: [false, [Validators.requiredTrue]],
      gender: [''],
      zone: [''],
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get ageField() {
    return this.form.get('age');
  }

  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }
}
