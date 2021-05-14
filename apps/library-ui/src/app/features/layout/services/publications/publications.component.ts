import { Component, OnInit } from '@angular/core';

import { PublicationPeriods, PublicationPeriodsService } from '@lib/common';

@Component({
  selector: 'library-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  public publications: PublicationPeriods[];

  public selectedPublication: PublicationPeriods;
  public selectedPublicationState: boolean;

  constructor(
    public publicationService: PublicationPeriodsService,
  ) { }

  public ngOnInit(): void {
    this.getPublicationPeriods();
  }

  public getPublicationPeriods(): void {
    this.publicationService.getAll().subscribe((publications: PublicationPeriods[]) => {
      this.publications = publications;
    });
  }

  public onSelectedPublication(publication: PublicationPeriods): void {
    this.selectedPublication = publication;
  }

  public onState(state: boolean): void {
    this.selectedPublicationState = state;
  }

}
