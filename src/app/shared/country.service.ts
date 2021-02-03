import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient,
  ) { }

  // countryList: any = [];


  form = new FormGroup({
    $countryId: new FormControl(null),
    countryName: new FormControl('', Validators.required),
    countryLocation: new FormControl('', Validators.required),
    countryCategory: new FormControl('', Validators.required),

  });


  // initializeCountry(): void {
  //   this.form.setValue({
  //     $countryId: null,
  //     countryName: '',
  //     countryLocation: '',
  //     countryCategory: '',
  //   });
  // }
  //
  // getAllCountries(): void {
  //   this.countryList = this.http.get('http://localhost:8080/rest/v2/allcountries');
  //   return this.countryList.snapshotChanges();
  // }
  //
  // insertCountry(country): void {
  //   this.http.push({
  //     countryName: country.countryName,
  //     countryLocation: country.countryLocation,
  //     countryCategory: country.countryCategory,
  //   });
  // }


}
