import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditorService implements OnInit {
  savedUser: any;

  constructor() { }

  ngOnInit(): void {
    this.savedUser = JSON.parse(localStorage.getItem('user')!);
  }
}
