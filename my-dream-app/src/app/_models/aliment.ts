export class Aliment {
  public static count = 0;
  public id: number;
  public nom: string;
  public date: Date;
  constructor(nom = '', date = new Date()) {
    this.id = Aliment.count++;
    this.nom = nom;
    this.date = date;
  }
}
