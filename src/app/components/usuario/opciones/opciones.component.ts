import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrl: './opciones.component.css',
})
export class OpcionesComponent {
  userForm: FormGroup;
  isModalOpen = false;
  user = {
    firstName: 'Juan',
    lastName: 'Perez',
    email: 'juan.perez@example.com',
    company: 'Empresa S.A.',
    phone: '123456789',
    country: 'México',
    address: 'Calle Falsa 123',
    city: 'Ciudad de México',
    state: 'CDMX',
    postalCode: '12345',
  };

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: [this.user.firstName],
      lastName: [this.user.lastName],
      email: [this.user.email],
      company: [this.user.company],
      phone: [this.user.phone],
      country: [this.user.country],
      address: [this.user.address],
      city: [this.user.city],
      state: [this.user.state],
      postalCode: [this.user.postalCode],
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.user = this.userForm.value;
      this.closeModal();
    }
  }
}
