import { Component, Input, OnInit } from '@angular/core';

import { Period, Publication, PublicationPeriods } from '@lib/common';

@Component({
  selector: 'library-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})
export class PeriodComponent implements OnInit {

  @Input() public publication: PublicationPeriods;

  public currentPeriod: Period;
  public selectedPublication: Publication;

  constructor() { }

  ngOnInit() {
    this.currentPeriod = this.publication?.periods[0];
    this.sortPublications();
  }

  public sortPublications(): void {
    this.currentPeriod.publications.sort((a, b) => a.number > b.number ? 1 : -1);
  }

  public selectYear(): void {
    this.sortPublications();
  }

  public selectPublication(doc: Publication): void {
    this.selectedPublication = doc;
    window.open(this.selectedPublication.publicationLink)
  }

}
