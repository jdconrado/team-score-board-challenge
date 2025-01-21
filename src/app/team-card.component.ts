import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="team-card">
      <h3>{{ team?.name }}</h3>
      <div class="score-controls">
        <!-- Example for increment/decrement approach: -->
        <button (click)="updateScore(-1)">-</button>
        <span class="score">{{ team?.score }}</span>
        <button (click)="updateScore(1)">+</button>
      </div>
    </div>
  `,
  styles: [`
    .team-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h3 {
      margin: 0 0 15px 0;
      text-align: center;
    }
    .score-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    .score {
      font-size: 24px;
      font-weight: bold;
      min-width: 50px;
      text-align: center;
    }
    button {
      background: #2196F3;
      color: white;
      border: none;
      border-radius: 4px;
      width: 30px;
      height: 30px;
      cursor: pointer;
      font-size: 18px;
      line-height: 1;
    }
    button:disabled {
      background: #cccccc;
      cursor: not-allowed;
    }
  `]
})
export class TeamCardComponent {

  @Input() team: { id: number; name: string; score: number } | undefined;
  @Output() scoreChange = new EventEmitter<number>();

  updateScore(change: number) {
     // TODO: If valid, compute the new score & emit it:
  }
}
