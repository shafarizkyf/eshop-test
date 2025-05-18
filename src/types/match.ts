export interface Matches {
  matches: Match[];
}

export interface Match {
  id: number;
  match_id: string;
  date: string;
  season: string;
  week: number;
  odds: string;
  odds_locked: boolean;
  home_team_score: string;
  away_team_score: string;
  home_team: Team;
  away_team: Team;
  favorite: Favorite;
  underdog: Underdog;
  straight_winner: StraightWinner;
  spread_winner: SpreadWinner;
  status: Status;
}

export interface Team {
  id: string;
  name: string;
  color: string;
  team_id: string;
  location: string;
  abbreviation: string;
  secondary_color: string;
}
export interface Favorite {
  id: string;
  name: string;
  color: string;
  team_id: string;
  location: string;
  abbreviation: string;
  secondary_color: string;
}

export interface Underdog {
  id: string;
  name: string;
  color: string;
  team_id: string;
  location: string;
  abbreviation: string;
  secondary_color: string;
}

export interface StraightWinner {
  id: string;
  name: string;
  color: string;
  team_id: string;
  location: string;
  abbreviation: string;
  secondary_color: string;
}

export interface SpreadWinner {
  id: string;
  name: string;
  color: string;
  team_id: string;
  location: string;
  abbreviation: string;
  secondary_color: string;
}

export interface Status {
  id: number;
  name: string;
  completed: boolean;
  status_id: string;
}
