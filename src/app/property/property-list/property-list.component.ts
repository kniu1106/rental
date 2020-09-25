import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/app/model/property';
import { ActivatedRoute } from '@angular/router';
//ssss
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Property[];
  City = '';
  SearchCity = '';

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
        data => {
        this.properties = data;
        console.log(data);
      }, error => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
  onCityFilter() {
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

}
