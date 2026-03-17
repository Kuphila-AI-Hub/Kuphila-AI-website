import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services" id="services">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Core Services</h2>
        </div>

        <div class="services-grid">
          <div class="service-card" *ngFor="let s of services; let i = index">
            <div class="service-icon">
              <span [innerHTML]="s.icon"></span>
            </div>
            <h3 class="service-title">{{ s.title }}</h3>
            <p class="service-desc">{{ s.desc }}</p>
            <a href="#contact" class="service-link">
              Learn more
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      padding: 100px 24px;
      background: white;
    }

    .section-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      margin-bottom: 48px;
    }

    .section-title {
      font-size: clamp(28px, 3.5vw, 40px);
      font-weight: 800;
      color: var(--text-dark);
      position: relative;

      &::after {
        content: '';
        display: block;
        width: 48px;
        height: 4px;
        background: var(--primary);
        border-radius: 2px;
        margin-top: 12px;
      }
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .service-card {
      padding: 28px 24px;
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      transition: var(--transition);
      background: var(--surface);
      display: flex;
      flex-direction: column;
      gap: 12px;

      &:hover {
        border-color: var(--primary);
        box-shadow: var(--shadow-md);
        transform: translateY(-3px);

        .service-icon { background: var(--primary); color: white; }
        .service-link { color: var(--primary); gap: 8px; }
      }
    }

    .service-icon {
      width: 46px; height: 46px;
      background: var(--primary-light);
      color: var(--primary);
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);
      flex-shrink: 0;
    }

    .service-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--text-dark);
    }

    .service-desc {
      font-size: 13px;
      line-height: 1.6;
      color: var(--text-mid);
      flex: 1;
    }

    .service-link {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-light);
      text-decoration: none;
      transition: var(--transition);
      margin-top: auto;
    }

    @media (max-width: 900px) {
      .services-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 480px) {
      .services-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="3" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.8"/>
        <path d="M6 13 L8.5 10 L11 13 L13.5 8 L16 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      title: 'Diagnostic AI',
      desc: 'Automated screening tools for radiology and pathology images with near-perfect accuracy.'
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="4" height="16" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="9" y="7" width="4" height="12" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="15" y="10" width="4" height="9" rx="1" fill="currentColor"/>
      </svg>`,
      title: 'Data Analysis',
      desc: 'Deep health data insights to uncover population trends and optimize care delivery.'
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.8"/>
        <circle cx="11" cy="11" r="3" stroke="currentColor" stroke-width="1.5"/>
        <path d="M15 5 L19 2M7 5 L3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
      title: 'Telemedicine',
      desc: 'Seamless remote consulting with integrated AI assistants for accurate, instant guidance.'
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L3 7V12C3 16.4 6.6 20.5 11 21.5C15.4 20.5 19 16.4 19 12V7L11 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M8 11L10 13L14 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      title: 'Predictive Analytics',
      desc: 'Early disease detection using longitudinal health markers for proactive healthcare.'
    }
  ];
}
