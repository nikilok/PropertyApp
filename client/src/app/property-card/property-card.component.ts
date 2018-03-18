import { Component, Input, OnInit } from '@angular/core';
import { PropertyRecord } from '../model/property-record';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  @Input() property: PropertyRecord;
  private w: number;
  private h: number;
  private readonly cardOffset = 8;
  private transformStyle;
  private glareStyle;

  ngOnInit() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
  }
  /*
    Beta:
    Inspired by the Apple TV Card animation,
    Calculating the Amount of swing to the card while the mouse hovers the card,
    Also calculating the glare effect's reflection on the card.
  */
  mouseMove(event) {
    const offsetX = 0.5 - event.screenX / this.w, // cursor position X
      offsetY = 0.5 - event.screenY / this.h, // cursor position Y
      dy = event.screenY - this.h / 2, // center of viewport: Todo Find center of card
      dx = event.screenX - this.w / 2, // center of viewport: Todo Find center of card
      theta = Math.atan2(dy, dx), // angle between cursor and center of card in RAD
      transformCard = `perspective(500px) rotateY(${offsetX * (this.cardOffset * 2)}deg)`; // card transform
    let angle = theta * 180 / Math.PI - 90; // convert rad in degrees
    // get angle between 0-360
    if (angle < 0) {
      angle = angle + 360;
    }
    const glare = `linear-gradient(${angle}deg, rgba(255,255,255, ${event.screenY /
      this.h}) 0%,rgba(255,255,255,0) 80%)`;

    this.transformStyle = transformCard;
    this.glareStyle = glare;
  }
  /*
    Reset the Transformation / Glare shines calculated on Mouse Move.
  */
  mouseLeave(event) {
    this.transformStyle = this.glareStyle = '';
  }
}
