import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../shared/country.service';
import {HttpClient} from '@angular/common/http';
import {Country} from '../../country';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CountryComponent} from '../country/country.component';


const ELEMENT_DATA: Country[] = [];

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit {

  displayedColumns: string[] = ['countryName', 'countryLocation', 'countryCategory', 'action'];
  dataSource = new MatTableDataSource<Country>(ELEMENT_DATA);



  constructor(
    public service: CountryService,
    private http: HttpClient,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const resp = this.http.get('http://localhost:8080/rest/v2/allcountries');
    resp.subscribe(respons => {
        this.dataSource.data = respons as Country[];
        console.log(this.dataSource.data);
      }
    );
  }


  onCreateNew(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(CountryComponent, dialogConfig);
  }

  onEdit(row: any): void {

  }

  onDelet(row: any): void {
    const resp = this.http.delete('http://localhost:8080/rest/v2/allcountries' + row);
    resp.subscribe( respons => {

      }

    );

  }
}
