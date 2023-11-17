import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements AfterViewInit, OnDestroy {
  @ViewChild('username') username!: ElementRef;

  private _subscription = new Subscription();

  constructor(private authService: AuthService) {}

  ngAfterViewInit(): void {
    this._subscription.add(
      this.authService.loggedUser$.subscribe((user) => {
        this.username.nativeElement.innerHTML =
          user.firstName + ' ' + user.lastName;
      })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }

  logOut(): void {
    this.authService.logOut();
  }
}
