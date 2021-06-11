import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Band } from '../band';
import { BandService } from '../band.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss'],
})
export class BandDetailComponent implements OnInit {
  @Input() band?: Band;

  constructor(
    private route: ActivatedRoute,
    private bandService: BandService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBand();
  }

  getBand(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bandService.getBand(id)
    .subscribe(band => this.band = band);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.band) {
      this.bandService.updateBand(this.band)
      .subscribe(() => this.goBack());
    }
  }

  
}
