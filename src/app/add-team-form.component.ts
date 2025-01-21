import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-team-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
  @if(form) {
    <form 
      [formGroup]="form"
      (ngSubmit)="onSubmit()" 
      class="add-team-form"
    >
      <div class="form-group">
        <label for="name">Team Name:</label>
        <input 
          id="name"
          type="text" 
          formControlName="name"
          placeholder="Enter team name"
        >
        <!-- TODO: Display validation errors for required or minLength(2) -->
      </div>

      <div class="form-group">
        <label for="score">Initial Score:</label>
        <input 
          id="score"
          type="number" 
          formControlName="score"
        >
        <!-- TODO: Display validation errors for required or min(0) -->
      </div>

      <button 
        type="submit" 
        [disabled]="!form.valid"
      >
        Add Team
      </button>
    </form>
  } @else {
    <h2>Team creation not enabled.</h2>
  }
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

  // Emit event when a new team is created
  @Output() teamCreated = new EventEmitter<any>();

  // TODO: Initialize your form, add validators
  form = undefined as any;

  onSubmit() {
    // TODO: If valid, emit the form values and reset
  }
}
