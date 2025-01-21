import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamCardComponent } from './app/team-card.component';
import { AddTeamFormComponent } from './app/add-team-form.component';

interface Team {
  id: number;
  name: string;
  score: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TeamCardComponent, AddTeamFormComponent],
  template: `
    <div class="container">
      <h1>Team Scoreboard</h1>
      
      <div class="summary">
        <h2>Total Score: {{ getTotalScore() }}</h2>
        <h3>Leading Team: {{ getLeadingTeam()?.name || 'No teams yet' }}</h3>
      </div>

      <app-add-team-form (teamCreated)="onTeamCreated($event)"></app-add-team-form>

      <div class="teams">
        <app-team-card 
          *ngFor="let team of teams" 
          [team]="team" 
          (scoreChange)="onScoreChanged(team.id, $event)">
        </app-team-card>
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
export class App {
  teams: Team[] = [];
  nextId = 1;

  onTeamCreated(newTeam: { name: string; score: number }) {
    this.teams.push({
      id: this.nextId++,
      ...newTeam
    });
  }

  onScoreChanged(teamId: number, newScore: number) {
    const team = this.teams.find(t => t.id === teamId);
    if (team) {
      team.score = newScore;
    }
  }

  getTotalScore(): number {
    return this.teams.reduce((sum, team) => sum + team.score, 0);
  }

  getLeadingTeam(): Team | undefined {
    return this.teams.reduce((leader, team) => 
      (!leader || team.score > leader.score) ? team : leader, 
      undefined as Team | undefined
    );
  }
}

bootstrapApplication(App);