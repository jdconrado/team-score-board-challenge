import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTeamFormComponent } from './app/add-team-form.component';
import { TeamCardComponent } from './app/team-card.component';

// Replace or enhance as needed
export interface Team {
  id: number;
  name: string;
  score: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddTeamFormComponent,
    TeamCardComponent
  ],
  template: `
    <div class="container">
      <h1>Scoreboard</h1>

      <!-- Example summary placeholders -->
      <div class="summary">
        <!-- TODO: Display total score or leading team if you wish -->
        <!-- e.g. "Total Score: {{ getTotalScore() }} (leading Team: {{TEAM}}!)" -->
         Team's total score: {{ getTotalScore() }}
      </div>

      <!-- Form to add a new team -->
      <app-add-team-form 
        (teamCreated)="onTeamCreated($event)"
      ></app-add-team-form>

      <div class="teams">
        <!-- Display each team as a 'team card' -->
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .summary {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
    }
    .teams {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
  `]
})
export class ScoreboardComponent {

  // TODO: Define way to store teams, e.g.:
  // (Optional) track an ID counter, or generate IDs any way you prefer:

  onTeamCreated(newTeamData: Omit<Team, 'id'>) {
     // TODO: create a new Team object and push it to teams
 }

  onScoreChanged(teamId: number, newScore: number) {
     // TODO: find the team in 'teams' and update its score
   }

  getTotalScore(): number {
       // TODO: sum the scores
    return 0;
 }
}

// Bootstraps the standalone ScoreboardComponent
bootstrapApplication(ScoreboardComponent);