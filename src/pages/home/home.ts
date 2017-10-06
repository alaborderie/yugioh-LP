import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Joueur } from '../../models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Joueur1: Joueur = new Joueur("Joueur 1", 1);
  Joueur2: Joueur = new Joueur("Joueur 2", 2);
  selectedPlayer: number;
  damage: number = 0;
  isHeal: boolean = false;
  sign: string = "DAMAGE";
  numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  zeros: Array<string> = ['0', '00', '000'];

  constructor(public navCtrl: NavController) {

  }

  selectPlayer(joueur: Joueur): void {
    this.selectedPlayer = joueur.id;
  }

  changeLP(): void {
    let damage: number = (this.isHeal) ? this.damage : - this.damage;
    if (this.selectedPlayer === 1) {
      this.Joueur1.LP = (this.Joueur1.LP + damage < 0) ? 0 : this.Joueur1.LP + damage;
    } else if (this.selectedPlayer === 2) {
      this.Joueur2.LP = (this.Joueur2.LP + damage < 0) ? 0 : this.Joueur2.LP + damage;
    }
    this.damage = 0;
  }

  changeSign(): void {
    this.isHeal = !this.isHeal;
    if (this.isHeal) {
      this.sign = "HEAL";
    } else {
      this.sign = "DAMAGE";
    }
  }

  addDamage(dmg: number): void {
    this.damage *= 10;
    this.damage += dmg;
  }

  multiplyDamage(zeros: string): void {
    this.damage *= Number(`1${zeros}`)
  }

  reset(): void {
    this.Joueur1 = new Joueur(this.Joueur1.name, 1);
    this.Joueur2 = new Joueur(this.Joueur2.name, 2);
  }

  resetDMG(): void {
    this.damage = 0;
  }

}
