import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Band } from '../band';
import { BandService } from '../band.service';



@Component({
  selector: 'app-band-new',
  templateUrl: './band-new.component.html',
  styleUrls: ['./band-new.component.scss']
})
export class BandNewComponent implements OnInit {
  bands: Band[] = [];

  public formBand: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bandService: BandService,
    private rout: Router
  ) { }

  ngOnInit(): void {
    this.formBand = this.formBuilder.group({
      name: ['', [Validators.required]],
      img: [''],
      members: [''],
      origin: [''],
      bio: [''],
      sitioWeb: [''],
      video: ['']
    });

    this.loadExample();
  }

  send(): void {
    if (this.formBand.invalid) {
      return alert('No valido');
    }
    this.bandService.addBand(this.formBand.value as Band)
      .subscribe(b => {
        this.bands.push(b);
        console.log(b);
      });
    this.formBand.reset();

    this.rout.navigateByUrl('/bands')
  }

  loadExample(): void{
    const resp = {
      name: '',
      members: '',
      bio: '',
      origin: '',
      img: '../../assets/img/test.jpeg',
      sitioWeb : 'https://www.',
      video: 'https://www.youtube.com/embed/2U76x2fD_tE'

    };
    this.formBand.patchValue(
      {
      name: resp.name,
      members: resp.members,
      bio: resp.bio,
      origin: resp.origin,
      img: resp.img,
      sitioWeb: resp.sitioWeb,
      video: resp.video

    });
  }


}
