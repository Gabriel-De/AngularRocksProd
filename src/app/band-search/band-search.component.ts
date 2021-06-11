import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Band } from '../band';
import { BandService } from '../band.service';

@Component({
  selector: 'app-band-search',
  templateUrl: './band-search.component.html',
  styleUrls: ['./band-search.component.scss']
})
export class BandSearchComponent implements OnInit {
bands$!: Observable<Band[]>;
private searchTerms = new Subject<string>();

  constructor(
    private bandService: BandService
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.bands$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.bandService.searchBands(term)),
    );
  }

}
