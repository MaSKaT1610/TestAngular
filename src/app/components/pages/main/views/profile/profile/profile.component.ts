import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/components/pages/auth/auth.service';
import { User } from 'src/app/components/pages/auth/login/login.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public profileForm = new FormGroup({
    email: new FormControl(''),
    firstName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern('[a-zA-Zа-яА-яёЁ]+'),
        Validators.minLength(4),
      ],
      updateOn: 'blur',
    }),
    lastName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern('[a-zA-Zа-яА-яёЁ]+'),
        Validators.minLength(4),
      ],
      updateOn: 'blur',
    }),
    phone: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'),
      ],
      updateOn: 'blur',
    }),
    webURL: new FormControl('', {
      validators: [
        Validators.pattern('(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?')
      ],
      updateOn: 'blur' }),
  });

  private _subscription = new Subscription();

  constructor(private authService: AuthService) {}

  get firstName(): FormControl {
    return this.profileForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.profileForm.get('lastName') as FormControl;
  }

  get phone(): FormControl {
    return this.profileForm.get('phone') as FormControl;
  }

  get webURL(): FormControl {
    return this.profileForm.get('webURL') as FormControl;
  }

  ngOnInit(): void {
    this._subscription.add(
      this.authService.loggedUser$.subscribe((user) => {
        this.profileForm.patchValue(user);
      })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  close() {
    this.success.nativeElement.classList.remove('success-open');
  }

  @ViewChild('success') success!: ElementRef;

  accept() {
    if (this.profileForm.valid) {
      this.success.nativeElement.classList.add('success-open');
      setTimeout(() => {
        this.success.nativeElement.classList.remove('success-open');
      }, 30000);
      localStorage.setItem('user', JSON.stringify(this.profileForm.value));
      this.authService.loggedUser = this.profileForm.value as User;
    } else {
      console.log('false');
    }
  }

  addPrefix(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value.length === 1) {
      (event.target as HTMLInputElement).value = '+7' + value;
    }
  }
}
