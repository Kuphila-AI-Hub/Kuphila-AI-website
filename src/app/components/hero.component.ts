import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero" id="home">
      <div class="hero-container">
        <div class="hero-content">
          <span class="badge">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="#0060d1" stroke-width="1.5"/>
              <circle cx="6" cy="6" r="2" fill="#0060d1"/>
            </svg>
            AI-Powered Healthcare
          </span>

          <h2 class="hero-title">
            Advancing Healthcare<br>
            through
            <span class="highlight"> AI</span><br>
            <em class="accent-word">Powered Applications</em>
          </h2>

          <p class="hero-desc">
            KUPHILA AI leverages cutting-edge technology to provide accessible,
            high-accuracy diagnostic solutions across Africa, ensuring no patient is left behind.
          </p>

          <div class="hero-actions">
            <a href="#about" class="btn-primary">
              Our Mission
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#services" class="btn-outline">View Solutions</a>
          </div>

          <div class="hero-stats">
            <div class="stat">
              <span class="stat-num">99%</span>
              <span class="stat-label">Detection Accuracy</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">--</span>
              <span class="stat-label">Partner Clinics</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">4</span>
              <span class="stat-label">African Countries</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="image-frame">
            <img src="assets/images/hero-doc.png" alt="AI-powered healthcare professional" class="hero-img"/>
            <div class="frame-deco frame-deco--tl"></div>
            <div class="frame-deco frame-deco--br"></div>
          </div>
          <div class="floating-card card-top">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L11 7H16L12 10.5L13.5 16L9 13L4.5 16L6 10.5L2 7H7L9 2Z" fill="#0060d1"/>
            </svg>
            <div>
              <div class="card-val">99.2%</div>
              <div class="card-lbl">AI Confidence</div>
            </div>
          </div>
          <div class="floating-card card-bottom">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="#00c4b4" stroke-width="2"/>
              <path d="M6 9L8 11L12 7" stroke="#00c4b4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div>
              <div class="card-val">Real-time</div>
              <div class="card-lbl">Diagnosis Ready</div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40 C360 80 720 0 1080 40 C1260 60 1380 50 1440 40 L1440 80 L0 80 Z" fill="#f5f8fc"/>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      padding-top: 68px;
      background: linear-gradient(135deg, #f0f6ff 0%, #ffffff 40%, #e8f6f5 100%);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: -100px; right: -100px;
        width: 600px; height: 600px;
        background: radial-gradient(circle, rgba(0,96,209,0.07) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0; left: -50px;
        width: 400px; height: 400px;
        background: radial-gradient(circle, rgba(0,196,180,0.06) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
      }
    }

    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 30px 0px 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 60px;
    }

    .hero-content {
      animation: fadeInLeft 1s ease both;
    }

    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: rgba(0,96,209,0.08);
      border: 1px solid rgba(0,96,209,0.18);
      border-radius: 99px;
      font-size: 12px;
      font-weight: 600;
      color: var(--primary);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 15px;
    }

    .hero-title {
      font-size: clamp(32px, 5vw, 52px);
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 10px;
      line-height: 1.1;

      .highlight {
        color: var(--primary);
      }

      .accent-word {
        font-family: 'DM Serif Display', serif;
        font-style: italic;
        color: var(--accent);
        font-weight: 400;
        font-size: clamp(38px, 5.5vw, 60px);
      }
    }

    .hero-desc {
      font-size: 16px;
      line-height: 1.7;
      color: var(--text-mid);
      max-width: 480px;
      margin-bottom: 36px;
    }

    .hero-actions {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-bottom: 48px;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 26px;
      background: var(--primary);
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      border-radius: var(--radius-sm);
      transition: var(--transition);
      text-decoration: none;

      .btn-primary:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,96,209,0.35);
      }
    }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      padding: 13px 26px;
      border: 1.5px solid var(--border);
      color: var(--text-mid);
      font-size: 15px;
      font-weight: 600;
      border-radius: var(--radius-sm);
      transition: var(--transition);
      text-decoration: none;

      &:hover {
        border-color: var(--primary);
        color: var(--primary);
        background: var(--primary-light);
      }
    }

    .hero-stats {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .stat {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .stat-num {
      font-size: 24px;
      font-weight: 800;
      color: var(--primary);
      letter-spacing: -0.03em;
    }

    .stat-label {
      font-size: 12px;
      color: var(--text-light);
      font-weight: 500;
    }

    .stat-divider {
      width: 1px;
      height: 36px;
      background: var(--border);
    }

    /* Visual side */
    .hero-visual {
      position: relative;
      animation: fadeInRight 0.7s 0.15s ease both;
    }

    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(30px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    .image-frame {
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      aspect-ratio: 480/420;
      background: #001020;
    }

    .hero-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .frame-deco {
      position: absolute;
      width: 60px; height: 60px;
      border: 3px solid var(--primary);
      opacity: 0.4;

      &--tl {
        top: 16px; left: 16px;
        border-right: none; border-bottom: none;
        border-radius: 4px 0 0 0;
      }

      &--br {
        bottom: 16px; right: 16px;
        border-left: none; border-top: none;
        border-radius: 0 0 4px 0;
      }
    }

    .floating-card {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 18px;
      background: white;
      border-radius: var(--radius-sm);
      box-shadow: var(--shadow-md);
      border: 1px solid var(--border);
      animation: floatBob 3s ease-in-out infinite;

      &.card-top {
        top: 32px;
        left: -32px;
        animation-delay: 0s;
      }

      &.card-bottom {
        bottom: 52px;
        right: -28px;
        animation-delay: 1.5s;
      }

      .card-val {
        font-size: 15px;
        font-weight: 700;
        color: var(--text-dark);
      }

      .card-lbl {
        font-size: 11px;
        color: var(--text-light);
        font-weight: 500;
      }
    }

    @keyframes floatBob {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    .hero-wave {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      line-height: 0;
      svg { width: 100%; height: 80px; }
    }

    @media (max-width: 900px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        padding: 60px 24px 80px;
      }

      .hero-desc, .hero-title .accent-word { text-align: center; }

      .hero-actions, .hero-stats, .badge { justify-content: center; }

      .hero-visual { max-width: 420px; margin: 0 auto; }

      .floating-card {
        &.card-top { left: -10px; }
        &.card-bottom { right: -10px; }
      }
    }

    @media (max-width: 480px) {
      .floating-card { display: none; }
    }
  `]
})
export class HeroComponent {}
