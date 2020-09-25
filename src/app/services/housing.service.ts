import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Observable } from 'rxjs';
//import { IProperty } from 'src/app/model/iproperty';
import { Property } from 'src/app/model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(): Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
      const propertiesArray: Property[] = [];

      for (const id in data) {

          propertiesArray.push(data[id]);

      }
      return propertiesArray;
      })
    );
  }
  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {

        return propertiesArray.find(p => p.Id === id);
      })
    );
  }
  addProperty(property: Property) {
   // this.http.post('data/properties.json')

    this.http.post("data/properties.json", property)
    .subscribe(
    data => {
    console.log("POST Request is successful ", data);
    },
    error => {
    console.log("Error", error);
    }
    );

  }


}
