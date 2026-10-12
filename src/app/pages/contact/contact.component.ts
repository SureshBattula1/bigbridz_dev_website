import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../common/section-header/section-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, SectionHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    lookingFor: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submitted = false;
  submitting = false;

  constructor(private readonly fb: FormBuilder) { }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const formData = this.form.value;

    // Create mailto link with form data
    const subject = encodeURIComponent(`Project Inquiry: ${formData.lookingFor}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Looking For: ${formData.lookingFor}\n\n` +
      `Message:\n${formData.message}`
    );

    // Simulated submission with clean user feedback
    setTimeout(() => {
      this.submitted = true;
      this.submitting = false;
      this.form.reset();
      console.log('Contact inquiry successfully captured:', formData);
    }, 700);
  }

  openWhatsApp(): void {
    const message = encodeURIComponent('Hello! I am interested in your software development services.');
    window.open(`https://wa.me/919989879939?text=${message}`, '_blank');
  }
}
