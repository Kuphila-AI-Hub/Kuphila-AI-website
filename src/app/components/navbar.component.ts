import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()">
      <div class="nav-container">

        <a class="logo-link" href="#home">
          <img src="assets/images/logo.png" alt="Kuphila-AI logo" class="logo-img"/>
        </a>

        <ul class="nav-links" [class.open]="menuOpen()">
          <li><a href="#about" (click)="closeMenu()">About</a></li>
          <li><a href="#services" (click)="closeMenu()">Services</a></li>
          <li><a href="#projects" (click)="closeMenu()">Projects</a></li>
          <li><a href="#team" (click)="closeMenu()">Team</a></li>
          <li><a href="#contact" (click)="closeMenu()">Contact</a></li>
        </ul>

      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      padding: 0 20px;
      height: 60px;
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.55);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 0.8px solid transparent;
      transition: all 0.5s ease;
    }

    .navbar.scrolled {
      border-bottom-color: var(--border);
      box-shadow: var(--shadow-sm);
    }

    .nav-container {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 40px;
    }

    .logo-icon {
      position: relative;
      overflow: hidden;
    }

    .logo-img {
      align-self: baseline;
      width: 150px;
      height: auto;
      object-fit: cover;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 40px;
      margin: 0;
      flex: 1;
      justify-content: center;


      li a {
        font-size: 14px;
        font-weight: 500;
        color: var(--text-mid);
        transition: var(--transition);
        position: relative;
        padding-bottom: 2px;

        &::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: var(--primary);
          border-radius: 2px;
          transition: width 0.25s ease;
        }

        &:hover {
          color: var(--primary);
          &::after { width: 100%; }
        }
      }
    }

    .btn-primary {
      padding: 10px 22px;
      background: var(--primary);
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: var(--transition);
      white-space: nowrap;
      flex-shrink: 0;

      &:hover {
        background: var(--primary-dark);
        transform: translateY(-1px);
        box-shadow: 0 4px 14px rgba(0,96,209,0.35);
      }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      padding: 8px;
      margin-left: auto;
      background: none;
      border: none;
      cursor: pointer;

      span {
        display: block;
        width: 22px;
        height: 2px;
        background: var(--text-dark);
        border-radius: 2px;
        transition: var(--transition);
      }
    }

    @media (max-width: 768px) {
      .hamburger { display: flex; }
      .btn-primary { display: none; }

      .nav-links {
        display: none;
        position: fixed;
        top: 68px; left: 0; right: 0;
        background: white;
        flex-direction: column;
        padding: 24px;
        gap: 20px;
        border-bottom: 1px solid var(--border);
        box-shadow: var(--shadow-md);

        &.open { display: flex; }
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
