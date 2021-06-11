import { Component, OnInit } from '@angular/core';
import { Band } from '../band';
import { BandService } from '../band.service';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.scss']
})
export class TopFiveComponent implements OnInit {
  bands: Band[] = [];

  constructor(
    private bandService: BandService
  ) { }

  ngOnInit(): void {
    this.getBands();
  }

  getBands(): void {
    this.bandService.getBands()
    .subscribe(bands => this.bands = bands.slice(0, 5));
  }

}
