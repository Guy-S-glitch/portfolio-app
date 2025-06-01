import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../../environments/environment.prod';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitted = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.isSubmitting = true;
    this.http
      .post(`${environment.apiUrl}/api/contact`, this.contactForm.value)
      .subscribe({
        next: () => {
          this.submitted = true;
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: (err) => {
          this.error = 'Failed to send message.';
          console.error(err);
          this.isSubmitting = false;
        },
      });
  }

  ngOnInit() {}
}
