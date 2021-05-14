import { Component, Input } from '@angular/core';

import { ImageService, PublicationPeriods } from '@lib/common';

@Component({
  selector: 'library-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent {

  @Input() public publication: PublicationPeriods;

  public checkBoxState = false;

  constructor(
    public imageService: ImageService
  ) { }

  public onMenu(state: boolean): void {
    this.checkBoxState = state;
  }

}
