import { Injectable } from "@angular/core";
import { HousingLocation } from "./housinglocation";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private readonly url = 'http://localhost:3000/locations';

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';


  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const result = await fetch(this.url);

    return await result.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);

    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
