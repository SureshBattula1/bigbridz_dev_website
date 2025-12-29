import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../common/section-header/section-header.component';
import { IconComponent } from '../../common/icon/icon.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, SectionHeaderComponent, IconComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    position: ['', Validators.required],
    experience: ['', Validators.required],
    resume: [''],
    coverLetter: [''],
  });

  submitted = false;
  submitting = false;

  positions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'We are looking for an experienced Full Stack Developer to join our team. You will be responsible for developing and maintaining web applications using modern technologies.'
    },
    {
      title: 'Mobile App Developer (React Native)',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Join our mobile development team to build cross-platform mobile applications using React Native. Experience with iOS and Android development is required.'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'We are seeking a creative UI/UX Designer to create engaging and intuitive user experiences for web and mobile applications.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Looking for a DevOps Engineer to manage our cloud infrastructure, CI/CD pipelines, and ensure smooth deployments.'
    },
    {
      title: 'QA Engineer',
      department: 'Quality Assurance',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Join our QA team to ensure the quality of our software products through comprehensive testing and quality assurance processes.'
    },
    {
      title: 'Project Manager',
      department: 'Management',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'We need an experienced Project Manager to lead software development projects, coordinate teams, and ensure timely delivery.'
    }
  ];

  benefits = [
    {
      icon: 'money',
      title: 'Competitive Salary',
      description: 'Attractive compensation packages based on experience and skills.'
    },
    {
      icon: 'health',
      title: 'Health Insurance',
      description: 'Comprehensive health insurance coverage for you and your family.'
    },
    {
      icon: 'learning',
      title: 'Learning & Development',
      description: 'Continuous learning opportunities with training programs and certifications.'
    },
    {
      icon: 'vacation',
      title: 'Flexible Work',
      description: 'Flexible working hours and work-from-home options.'
    },
    {
      icon: 'target',
      title: 'Career Growth',
      description: 'Clear career progression paths and growth opportunities.'
    },
    {
      icon: 'team',
      title: 'Great Team',
      description: 'Work with talented professionals in a collaborative environment.'
    }
  ];

  constructor(private readonly fb: FormBuilder) {}

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    
    this.submitting = true;
    const formData = this.form.value;
    
    // Create mailto link with application data
    const subject = encodeURIComponent(`Job Application: ${formData.position}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Position: ${formData.position}\n` +
      `Experience: ${formData.experience}\n\n` +
      `Cover Letter:\n${formData.coverLetter || 'Not provided'}\n\n` +
      `Resume Link: ${formData.resume || 'Not provided'}`
    );
    
    const mailtoLink = `mailto:bvsuresh.ab@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      this.submitted = true;
      this.submitting = false;
      this.form.reset();
    }, 1000);
  }
}

