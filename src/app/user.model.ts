export class UserSumary {
  nom: string;
  email: string;
  gender: string;
  statut: string;

  constructor(nom: string, email: string, gender: string, statut: string) {
    this.nom = nom;
    this.email = email;
    this.gender = gender;
    this.statut = statut;
  }
}
