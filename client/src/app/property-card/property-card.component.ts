import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PropertyRecord } from '../model/property-record';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  @Input() property: PropertyRecord;
  @ViewChild('card') cardElement: ElementRef;
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
    Inspired by the Apple TV Card animation,
    Calculating the Amount of swing to the card while the mouse hovers the card,
    Also calculating the glare effect's reflection on the card.
  */
  mouseMove(event) {
    const offsetX = 0.5 - event.screenX / this.w, // cursor position X
      offsetY = 0.5 - event.screenY / this.h, // cursor position Y
      cardPosition = this.getCardMid(),
      dy = cardPosition.cardTop + 200 - cardPosition.y, // Few pixels below the mid point of the card
      dx = event.screenX - cardPosition.x, // diff between mid point x of the card and cursor x
      theta = Math.atan2(dy, dx), // angle between cursor and center of card in RAD
      transformCard = `perspective(500px) rotateY(${offsetX * (this.cardOffset * 2)}deg)`, // card transform
      angle = theta * 180 / Math.PI - 90; // convert rad to degrees

    const glareShine = `linear-gradient(${angle}deg, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 80%)`;

    this.transformStyle = transformCard;
    this.glareStyle = glareShine;
  }
  /*
    Reset the Transformation / Glare shines calculated on Mouse Leave.
  */
  mouseLeave(event) {
    this.transformStyle = this.glareStyle = '';
  }
  /*
  Fn that returns back the mid point coordinates (x, y) of the card your hovering
   */
  getCardMid() {
    const ele: any = this.cardElement,
      card = ele.nativeElement,
      cardCoords = this.getCoords(card),
      offsetLeft = cardCoords.left,
      offsetTop = cardCoords.top,
      cardWidth = card.offsetWidth,
      cardHeight = card.offsetHeight;
    return {
      x: cardWidth / 2 + offsetLeft,
      y: cardHeight / 2 + offsetTop,
      cardTop: offsetTop
    };
  }
  /*
  Fn get offset top, left compared to the viewport.
  */
  getCoords(elem) {
    const pos = elem.getBoundingClientRect();
    return { top: pos.top, left: pos.x };
  }
}
