import { Component, OnInit } from '@angular/core';

import { Band } from '../band';
import { BandService } from '../band.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss'],
})
export class BandsComponent implements OnInit {
  bands: Band[] = [];

  constructor(private bandService: BandService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getBands();
  }

  getBands(): void {
    this.bandService.getBands().subscribe((bands) => (this.bands = bands));
  }

  add(name: string):void{
    name = name.trim();
    if (!name) { return; }
    this.bandService.addBand({name} as Band)
    .subscribe(band => {
      this.bands.push(band);
    });
  }

  delete(band: Band): void {
    this.bands = this.bands.filter(h => h !== band);
    this.bandService.deleteBand(band.id).subscribe();
  }

}
