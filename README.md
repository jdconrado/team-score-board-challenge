# Scoreboard with Add/Edit Team Form

Welcome to the Angular coding challenge! This project is partially scaffolded to help you focus on the core requirements:

1. **Parent Component**: `ScoreboardComponent` (manages the list of teams and overall summary).
2. **Child Component (Form)**: `AddTeamFormComponent` (Reactive Form for adding a new team).
3. **Child Component (Team Card)**: `TeamCardComponent` (displays a single team, allows score increments/decrements).

Your goal is to implement the missing pieces to meet the specifications below.

---

## Requirements

1. **Scoreboard (Parent Component)**
   - Holds an array of `teams`, each `{ id: number; name: string; score: number }`.
   - Displays a summary (e.g. total score, leading team, or both).
   - Implement methods:
     - `onTeamCreated(newTeam)` → add the new team to `teams`.
     - `onScoreChanged(teamId, newScore)` → update the team’s score.
   - (Optionally) compute `getTotalScore()` or `getLeadingTeam()` for real-time summary.

2. **AddTeamFormComponent (Reactive Forms)**
   - A form to add a new team with Team fields **name** and **score**.
   - Use `FormGroup`, `FormControl`, and built-in validators if applies.
   - Show validation errors for required/invalid inputs.

3. **TeamCardComponent**
   - Receives a `team` as `@Input()`.
   - Renders increment (+) and decrement (–) buttons or a direct input for changing the score.
   - Emits `(scoreChange)` whenever the score is updated.

You may complete the challenge in **30–45 minutes**, but it’s flexible. If you finish quickly, feel free to add extra polish (styling, advanced validations, or a feature like removing teams).

---

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run the App**:
   ```bash
   npm run start
   ```
   Then open [http://localhost:4200](http://localhost:4200) in your browser.

3. **File Overview**:
   - `main.ts`: Parent scoreboard component.
   - `add-team-form.component.ts`: Child form for adding a new team.
   - `team-card.component.ts`: Child card for displaying a single team’s info.
   - `index.html`, `global_styles.css`: Basic HTML & global styling.
   - `README.md`: You’re reading it now!


**Feel free to approach** these tasks with alternative patterns if desired (e.g., using services, Observables, store libraries). The main goal is to show that you understand Angular’s fundamental concepts around components, inputs/outputs, and reactive forms.

---

## Good Luck!

If you have questions about environment setups, optional tasks, or how to structure your code, ask! 
Enjoy the challenge.