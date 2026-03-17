import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact" id="contact">
      <div class="section-container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2 class="contact-title">Get in Touch</h2>
            <p class="contact-desc">
              Interested in our solutions or partnering with us? Fill out the form,
              and our team will get back to you within 24 hours.
            </p>

            <div class="contact-details">
              <div class="detail-item">
                <div class="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 4h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M2 5l7 5 7-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </div>
                <div>
                  <span class="detail-label">Email us</span>
                  <a href="mailto:kuphilaaihub26@gmail.com" class="detail-val">kuphilaaihub26&#64;gmail.com</a>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1.5C6.51 1.5 4.5 3.51 4.5 6c0 3.75 4.5 10.5 4.5 10.5S13.5 9.75 13.5 6c0-2.49-2.01-4.5-4.5-4.5z" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="9" cy="6" r="1.5" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </div>
                <div>
                  <span class="detail-label">Visit us</span>
                  <span class="detail-val">Nairobi, Westlands, Rainbow Towers 5th Floor</span>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form class="contact-form" (ngSubmit)="onSubmit()">
              <div class="form-row">
                <div class="form-group">
                  <label for="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Jane Doe"
                    [(ngModel)]="form.fullName"
                    name="fullName"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    [(ngModel)]="form.email"
                    name="email"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject" [(ngModel)]="form.subject" name="subject">
                  <option value="" disabled selected>Partnership Inquiry</option>
                  <option>Partnership Inquiry</option>
                  <option>Product Demo Request</option>
                  <option>Technical Support</option>
                  <option>Press & Media</option>
                  <option>Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can we help you?"
                  [(ngModel)]="form.message"
                  name="message"
                ></textarea>
              </div>

              <button type="submit" class="btn-submit" [class.sent]="sent()">
                <span *ngIf="!sent()">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8L14 2L8 14L7 9L2 8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span *ngIf="sent()">
                  ✓ Message Sent!
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 60px 24px;
      background: var(--surface-alt);
    }

    .section-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 80px;
      align-items: start;
    }

    .contact-title {
      font-size: clamp(28px, 3.5vw, 40px);
      font-weight: 800;
      color: var(--text-dark);
      margin-bottom: 16px;
    }

    .contact-desc {
      font-size: 15px;
      line-height: 1.7;
      color: var(--text-mid);
      margin-bottom: 36px;
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .detail-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }

    .detail-icon {
      width: 40px; height: 40px;
      background: var(--primary-light);
      color: var(--primary);
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .detail-label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-light);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 2px;
    }

    .detail-val {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-dark);
      text-decoration: none;

      &:hover { color: var(--primary); }
    }

    /* Form */
    .contact-form-wrapper {
      background: white;
      border-radius: var(--radius-lg);
      padding: 40px;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--border);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 7px;

      label {
        font-size: 13px;
        font-weight: 600;
        color: var(--text-dark);
      }

      input, select, textarea {
        padding: 11px 14px;
        border: 1.5px solid var(--border);
        border-radius: var(--radius-sm);
        font-family: inherit;
        font-size: 14px;
        color: var(--text-dark);
        background: var(--surface);
        transition: var(--transition);
        outline: none;

        &::placeholder { color: var(--text-light); }

        &:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(0,96,209,0.1);
        }
      }

      textarea {
        resize: vertical;
        min-height: 120px;
        line-height: 1.5;
      }

      select {
        appearance: none;
        cursor: pointer;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4L6 8L10 4' stroke='%236b7f96' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 14px center;
      }
    }

    .btn-submit {
      width: 100%;
      padding: 14px;
      background: var(--primary);
      color: white;
      font-size: 15px;
      font-weight: 700;
      border: none;
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: var(--transition);

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }

      &:hover:not(.sent) {
        background: var(--primary-dark);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,96,209,0.3);
      }

      &.sent {
        background: #16a34a;
        cursor: default;
      }
    }

    @media (max-width: 900px) {
      .contact-grid { grid-template-columns: 1fr; gap: 48px; }
      .form-row { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactComponent {
  form: ContactForm = { fullName: '', email: '', subject: '', message: '' };
  sent = signal(false);

  onSubmit() {
    if (this.form.fullName && this.form.email) {
      this.sent.set(true);
      setTimeout(() => {
        this.sent.set(false);
        this.form = { fullName: '', email: '', subject: '', message: '' };
      }, 3000);
    }
  }
}
