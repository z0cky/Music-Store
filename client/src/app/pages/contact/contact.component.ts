import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MusicService } from 'app/services/music.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private musicService: MusicService) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.musicService.sendContactMessage(this.contactForm.value).subscribe({
        next: () => {
          alert('Message sent successfully!');
          this.contactForm.reset();
        },
        error: (err) => {
          alert(' Failed to send message. Please try again later.');
          console.error(err);
        }
      });
    }
  }
}
