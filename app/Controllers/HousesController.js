import { ProxyState } from "../AppState.js";
import { getHouseform } from "../components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawHouses() {
  let houseCardsTemplate = ''

  ProxyState.houses.forEach(house => houseCardsTemplate += house.CardTemplate)

  document.getElementById("listings").innerHTML = `
    <div class="row houses">
      ${houseCardsTemplate}
    </div>
  `

  document.getElementById("listing-modal-form-slot").innerHTML = getHouseform();
  document.getElementById("add-listing-modal-label").innerText = "Add House 🏠";
}

export class HousesController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses);
    // _drawHouses()
  }

  addHouse() {
    // DO THIS like always
    try {
      event.preventDefault();
      /**@type {HTMLFormElement} */
      //@ts-ignore
      const formElem = event.target;
      const formData = {
        sqfootage: formElem.sqfootage.value,
        rooms: formElem.rooms.value,
        price: formElem.price.value,
        color: formElem.color.value,
        yearbuilt: formElem.yearbuilt.value,
        description: formElem.description.value,
        img: formElem.img.value,
      }
      housesService.addHouse(formData)

      formElem.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()

      
      
    } catch (error) {
      console.error("[ADD_HOUSE_FORM_ERROR]", error);
      Pop.toast(error.message, "error")
    }
  }
  drawHouses() {
    _drawHouses()
    // REVIEW [epic=Mark] How could we refactor this?
    // @ts-ignore
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}
