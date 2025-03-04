import { Car } from "./Models/Car.js";
import { Job } from "./Models/Job.js";
import { House } from "./Models/House.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  /**@type {import ('./Models/Job').Job[]} */
  jobs = [
    new Job({
      company: "mcd",
      position: "ceo",
      duties: "die",
      salary: 60000,
      hours: 80,
      requirements: "living",
      description: "ruin lives",
      logo: "https://media.discordapp.net/attachments/346428945467441163/961456618162245643/Illustration47.jpg?width=720&height=624",
    }),
  ];

  /**@type {import ('./Models/House').House[]} */
  houses = [
    new House({
      color: "blue",
      description: "hiyo",
      img: "https://upload.wikimedia.org/wikipedia/en/0/08/TromeoJulietPoster.jpg",
      rooms: "4",
      sqfootage: "8900",
      yearbuilt: "1970",
      price: 1900,
    }),
  ];

  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({
      color: "red",
      description: "This is my test car",
      img: "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/03/1988_Accord_3rd_Generation.jpg?resize=980:*",
      make: "Honda",
      model: "Accord",
      mileage: "289000",
      price: 5500,
      year: 1988,
    }),
  ];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
