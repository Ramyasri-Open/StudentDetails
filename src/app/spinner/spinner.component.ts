import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  showSpinner: boolean;
  constructor(private router: Router) {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.router.navigate(['/dashboard']);
    }, 2000);
  }
}
