import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../shared/country.service';
import {HttpClient} from '@angular/common/http';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  model: CountryModel = {
    countryId: 0,
    countryName: '',
    countryLocation: '',
    countryCategory: '',
  };

  constructor(
    public service: CountryService,
    private http: HttpClient,
    private dialogRef: MatDialogRef<CountryComponent>) {
  }

  ngOnInit(): void {
  }

  onClear(): void {
    this.service.form.reset();
  }

  submitCountryDetail(): void {
    const url = 'http://localhost:8080/rest/v2/addcountry';
    this.http.post(url, this.model).subscribe(
      res => {
        this.service.form.reset();
      },
      );
    this.dialogRef.close();
  }


}


export interface CountryModel{
  countryId: number;
  countryName: string;
  countryLocation: string;
  countryCategory: string;
}
