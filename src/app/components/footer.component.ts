import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-main">
        <div class="footer-container">
          <div class="footer-brand">
            <a class="footer-logo" href="#">
              <div class="logo-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="7" fill="#0060d1"/>
                  <path d="M7 14 L11 10 L14 14 L17 8 L21 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                  <circle cx="21" cy="14" r="2" fill="#00c4b4"/>
                </svg>
              </div>
              <span>KUPHILA <strong>AI</strong></span>
            </a>
            <p class="brand-desc">
              Pioneering the future of medicine with ethical, accurate, and accessible
              artificial intelligence for all.
            </p>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn" class="social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-nav">
            <div class="nav-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#">Our History</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press Kit</a></li>
              </ul>
            </div>

            <div class="nav-col">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#services">Diagnostic AI</a></li>
                <li><a href="#services">Health Analytics</a></li>
                <li><a href="#services">Research Tools</a></li>
                <li><a href="#contact">Custom AI Models</a></li>
              </ul>
            </div>

            <div class="nav-col newsletter-col">
              <h4>Newsletter</h4>
              <p>Stay updated with the latest AI medicine breakthroughs.</p>
              <div class="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button class="subscribe-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-container">
          <span>&copy; 2026 KUPHILA AI. All rights reserved.</span>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--text-dark);
      color: rgba(255,255,255,0.7);
    }

    .footer-main {
      padding: 42px 24px 42px;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      gap: 40px;
    }

    .footer-brand {
      flex: 0 0 260px;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: white;
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0.02em;
      margin-bottom: 16px;

      strong { font-weight: 800; color: #4d9eff; }
    }

    .brand-desc {
      font-size: 13px;
      line-height: 1.7;
      color: rgba(255,255,255,0.5);
      margin-bottom: 24px;
    }

    .social-links {
      display: flex;
      gap: 10px;
    }

    .social-btn {
      width: 36px; height: 36px;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255,255,255,0.6);
      text-decoration: none;
      transition: var(--transition);

      &:hover {
        background: rgba(255,255,255,0.08);
        color: white;
        border-color: rgba(255,255,255,0.3);
      }
    }

    .footer-nav {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr 1.4fr;
      gap: 40px;
    }

    .nav-col {
      h4 {
        font-size: 13px;
        font-weight: 700;
        color: white;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 18px;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;

        a {
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: var(--transition);

          &:hover { color: white; }
        }
      }

      p {
        font-size: 13px;
        line-height: 1.6;
        color: rgba(255,255,255,0.5);
        margin-bottom: 14px;
      }
    }

    .newsletter-form {
      display: flex;
      gap: 8px;
      flex-direction: column;

      input {
        padding: 10px 14px;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: var(--radius-sm);
        color: white;
        font-family: inherit;
        font-size: 13px;
        outline: none;
        transition: var(--transition);

        &::placeholder { color: rgba(255,255,255,0.35); }
        &:focus { border-color: var(--primary); background: rgba(255,255,255,0.12); }
      }
    }

    .subscribe-btn {
      padding: 10px 16px;
      background: var(--primary);
      color: white;
      font-size: 13px;
      font-weight: 600;
      border: none;
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        background: var(--primary-dark);
        transform: translateY(-1px);
      }
    }

    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 20px 24px;

      .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      span {
        font-size: 12px;
        color: rgba(255,255,255,0.35);
      }
    }

    .footer-links {
      display: flex;
      gap: 24px;

      a {
        font-size: 12px;
        color: rgba(255,255,255,0.4);
        text-decoration: none;
        transition: var(--transition);

        &:hover { color: rgba(255,255,255,0.8); }
      }
    }

    @media (max-width: 900px) {
      .footer-container { flex-direction: column; gap: 40px; }
      .footer-brand { flex: none; }
      .footer-nav { grid-template-columns: 1fr 1fr; }
    }

    @media (max-width: 600px) {
      .footer-nav { grid-template-columns: 1fr; }
      .footer-bottom .footer-container { flex-direction: column; text-align: center; }
    }
  `]
})
export class FooterComponent {}
