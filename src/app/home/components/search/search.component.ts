import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchField = new FormControl();
  result: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.searchField.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.getData(value);
    });
  }

  private getData(query: string) {
    const API = 'jaHZRZvi72DYZ2vHHUZLbcC08tKSt4Pk';
    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API}&limit=12`
      )
      .pipe(
        map((response: any) => {
          return response.data.map((item) => item.images.downsized);
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.result = data;
      });
  }
}
