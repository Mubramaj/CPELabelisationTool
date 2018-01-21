import { Label } from './index';

interface DarketTrainingJSON {

}

export class DarknetTraining {
  id: number;
  is_finished: boolean;
  score: number;
  is_training: boolean;
  started_at: Date;
  finished_at: Date;
  labels: Label[];
  title: string;
  description: string;

  constructor(title: string, description: string, labels: Label[]){
    this.title = title;
    this.description = description;
    this.labels = labels;
  }
}

