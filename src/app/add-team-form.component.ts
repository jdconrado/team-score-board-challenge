import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-team-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="add-team-form">
      <div class="form-group">
        <label for="name">Team Name:</label>
        <input 
          id="name"
          type="text" 
          formControlName="name"
          placeholder="Enter team name"
        >
        <div *ngIf="form.get('name')?.errors?.['required'] && form.get('name')?.touched" 
             class="error">
          Team name is required
        </div>
        <div *ngIf="form.get('name')?.errors?.['minlength']" 
             class="error">
          Team name must be at least 2 characters
        </div>
      </div>

      <div class="form-group">
        <label for="score">Initial Score:</label>
        <input 
          id="score"
          type="number" 
          formControlName="score"
        >
        <div *ngIf="form.get('score')?.errors?.['min']" 
             class="error">
          Score cannot be negative
        </div>
      </div>

      <button type="submit" [disabled]="!form.valid">Add Team</button>
    </form>
  `,
  styles: [`
    .add-team-form {
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .error {
      color: red;
      font-size: 0.8em;
      margin-top: 5px;
    }
    button {
      background: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background: #cccccc;
      cursor: not-allowed;
    }
  `]
})
export class AddTeamFormComponent {
  @Output() teamCreated = new EventEmitter<{ name: string; score: number }>();

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    score: new FormControl(0, [
      Validators.required,
      Validators.min(0)
    ])
  });

  onSubmit() {
    if (this.form.valid) {
      this.teamCreated.emit({
        name: this.form.value.name!,
        score: this.form.value.score!
      });
      this.form.reset({ name: '', score: 0 });
    }
  }
}