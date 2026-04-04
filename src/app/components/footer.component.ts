import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-main">
        <div class="footer-container">
          <div class="footer-brand">
            <a class="footer-logo" href="#home">
              <div class="logo-icon">
                <img src="./assets/images/logo-white.png" alt="Kuphila icon" width="160" height="auto" />
              </div>
            </a>
            <p class="brand-desc">
              Pioneering the future of medicine with ethical, accurate, and accessible
              artificial intelligence for all.
            </p>
            <div class="social-links">
              <a href="https://www.linkedin.com/company/kuphila-ai" aria-label="LinkedIn" class="social-btn" target="_blank">
                <img src="./assets/images/linkedin.png" alt="LinkedIn" width="28" height="28" />
              </a>

                <a href="https://huggingface.co/KuphilaAI" aria-label="Hugging Face" class="social-btn" target="_blank">
                  <img src="./assets/images/hug.png" alt="Hugging Face" width="28" height="28" />
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
export class FooterComponent { }
