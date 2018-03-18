/*
    The Model representing a Property Record
*/
export class PropertyRecord {
  public _id: string;
  public baseRent: number;
  public sellPrice: number;
  public title: string;
  public photoUrl: string;
  public fullAddress: string;
  public numberRooms: number;
  public space: number;
  public isRent: boolean;
  public isSale: boolean;

  constructor(property) {
    this._id = property._id.$id;
    this.baseRent = property.advertisementPrice.baseRent;
    this.sellPrice = property.advertisementPrice.sellPrice;
    this.title = property.title;
    this.photoUrl = this.getImgUrl(property);
    this.fullAddress = property.realestateSummary.address.fullAddress;
    this.numberRooms = property.realestateSummary.numberOfRooms;
    this.space = property.realestateSummary.space;
    this.isRent = this.fetchPropertyState(property, true);
    this.isSale = this.fetchPropertyState(property, false);
  }

  getImgUrl(property): string {
    /* Try Fetch the Image from the first advertisement Asset */
    try {
      return property.advertisementAssets['0'].advertisementThumbnails.inventory_m.url;
    } catch {
      return '/assets/default.jpg';
    }
  }

  fetchPropertyState(property, flag): boolean {
    if (flag) {
      // Check for Rent
      return property.advertisementPrice.baseRent ? true : false;
    } else {
      // Check for Sale
      return property.advertisementPrice.sellPrice ? true : false;
    }
  }
}
