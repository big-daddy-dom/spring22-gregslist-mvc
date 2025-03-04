import { generateId } from "../Utils/generateId.js";

export class House {
  constructor({
    id = generateId(),
    rooms,
    sqfootage,
    yearbuilt,
    description,
    price,
    img,
    color,
  }) {
    if (!price || !rooms || !sqfootage) {
      throw new Error(
        "You can't add a house without a price, rooms and sq footage");
    }
    if (price <= 0) {
      throw new Error("Where my money");
    }
    this.id = id;
    this.sqfootage = sqfootage;
    this.rooms = rooms;
    this.description = description || "";
    this.yearbuilt = yearbuilt || "";
    this.price = price;
    this.img = img || "";
    this.color = color || "";
  }
  get CardTemplate() {
    return /*html*/ `
    <div class="house col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.img}" alt="">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.rooms} - ${this.sqfootage} - ${this.yearbuilt}</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <div class="d-flex align-items-center">
            <p class="m-0">Color:</p>
            <div class="color-box border border-dark" style="background-color: ${this.color};"></div>
          </div>
          <i class="mdi mdi-delete selectable" onclick="app.housessController.removeHouse('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }
}

