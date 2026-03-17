import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-project',
  standalone: true,
  template: `
    <section class="featured" id="projects">
      <div class="section-container">
        <div class="featured-grid">
          <div class="featured-image">
            <img src="assets/images/cervical-scan.svg" alt="AI Cervical Cancer Detection Microscopy Scan" />
            <div class="scan-badge">
              <span class="pulse-dot"></span>
              Live AI Processing
            </div>
          </div>

          <div class="featured-content">
            <span class="feature-label">FEATURED PROJECT</span>
            <h2 class="featured-title">Cervical Cancer Detection System</h2>
            <p class="featured-desc">
              Our flagship AI-powered screening tool designed for early-stage detection.
              It utilizes deep learning to identify precancerous lesions with over 99% accuracy
              in preliminary clinical trials.
            </p>

            <ul class="feature-points">
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="#0060d1" opacity="0.15"/>
                  <path d="M5 8L7 10L11 6" stroke="#0060d1" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                99% Clinical Accuracy
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="#0060d1" opacity="0.15"/>
                  <path d="M5 8L7 10L11 6" stroke="#0060d1" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Real-time Image Processing
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="#0060d1" opacity="0.15"/>
                  <path d="M5 8L7 10L11 6" stroke="#0060d1" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Low-bandwidth Compatible
              </li>
            </ul>

            <a href="#contact" class="btn-primary">
              Explore Technical Specs
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .featured {
      padding: 80px 24px;
      background: var(--surface-alt);
    }

    .section-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .featured-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 60px;
      background: white;
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      border: 1px solid var(--border);
    }

    .featured-image {
      position: relative;
      background: #0a0515;
      min-height: 380px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .scan-badge {
      position: absolute;
      top: 20px; left: 20px;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: rgba(0,0,0,0.7);
      border: 1px solid rgba(0,255,136,0.4);
      border-radius: 99px;
      font-size: 11px;
      font-weight: 600;
      color: #00ff88;
      backdrop-filter: blur(8px);
    }

    .pulse-dot {
      width: 8px; height: 8px;
      background: #00ff88;
      border-radius: 50%;
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.4); }
    }

    .featured-content {
      padding: 48px 48px 48px 0;
    }

    .feature-label {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: var(--primary);
      text-transform: uppercase;
      margin-bottom: 14px;
      padding: 4px 10px;
      background: var(--primary-light);
      border-radius: 4px;
    }

    .featured-title {
      font-size: clamp(24px, 3vw, 34px);
      font-weight: 800;
      color: var(--text-dark);
      margin-bottom: 16px;
      line-height: 1.2;
    }

    .featured-desc {
      font-size: 15px;
      line-height: 1.7;
      color: var(--text-mid);
      margin-bottom: 28px;
    }

    .feature-points {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 36px;

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 600;
        color: var(--text-dark);
      }
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 24px;
      background: var(--primary);
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: var(--transition);

      &:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,96,209,0.3);
      }
    }

    @media (max-width: 900px) {
      .featured-grid { grid-template-columns: 1fr; }
      .featured-content { padding: 36px 28px 36px; }
      .featured-image { min-height: 280px; }
    }
  `]
})
export class FeaturedProjectComponent {}
