import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pillar {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mission" id="about">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Our Mission</h2>
          <p class="section-sub">
            Empowering healthcare providers with intelligent tools to improve patient
            outcomes and streamline diagnostic workflows. We focus on these core pillars:
          </p>
        </div>

        <div class="pillars-grid">
          <div class="pillar-card" *ngFor="let p of pillars">
            <div class="pillar-icon" [style.background]="p.color + '18'" [style.color]="p.color">
              <span [innerHTML]="p.icon"></span>
            </div>
            <h3 class="pillar-title">{{ p.title }}</h3>
            <p class="pillar-desc">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .mission {
      padding: 50px 24px;
      background: #f5f8fc;
    }

    .section-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      max-width: 580px;
      margin-bottom: 56px;
    }

    .section-title {
      font-size: clamp(28px, 3.5vw, 40px);
      font-weight: 800;
      color: var(--text-dark);
      margin-bottom: 16px;
      position: relative;

      &::after {
        content: '';
        display: block;
        width: 48px;
        height: 4px;
        background: var(--accent);
        border-radius: 2px;
        margin-top: 12px;
      }
    }

    .section-sub {
      font-size: 16px;
      line-height: 1.7;
      color: var(--text-mid);
    }

    .pillars-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    .pillar-card {
      background: white;
      border-radius: var(--radius-md);
      padding: 32px;
      border: 1px solid var(--border);
      transition: var(--transition);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary), var(--accent));
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
      }

      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);

        &::before { transform: scaleX(1); }
      }
    }

    .pillar-icon {
      width: 52px; height: 52px;
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      font-size: 22px;
    }

    .pillar-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--text-dark);
      margin-bottom: 10px;
    }

    .pillar-desc {
      font-size: 14px;
      line-height: 1.65;
      color: var(--text-mid);
    }

    @media (max-width: 768px) {
      .pillars-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class MissionComponent {
  pillars: Pillar[] = [
    {
      icon: '<img src="./assets/images/access.png" alt="accessibility icon" width="48" height="48" />',
      title: 'Accessibility',
      desc: 'Bringing advanced diagnostics to remote and underserved areas across the continent.',
      color: '#7c3aedcb'
    },
    {
      icon: '<img src="./assets/images/innovation.png" alt="innovation icon" width="48" height="48"/>',
      title: 'Innovation',
      desc: 'Pioneering new AI models specifically tailored for diverse healthcare challenges across Africa.',
      color: '#7c3aedcb'
    },
    {
      icon: '<img src="./assets/images/precision.png" alt="precision icon" width="48" height="48" />',
      title: 'Precision',
      desc: 'Ensuring the highest standards of accuracy in diagnostic results through rigorous clinical validation.',
      color: '#00c4b4'
    },
    {
      icon: '<img src="./assets/images/impact.png" alt="impact icon" width="48" height="48" />',
      title: 'Impact',
      desc: 'We ensure that we create tools that bring positive impact to the communities we partner and work with.',
      color: '#00c4b4'
    }
  ];
}
