import { Component, OnInit } from '@angular/core';

import { ImageService, Section, SectionService } from '@lib/common';

@Component({
  selector: 'library-top-sections',
  templateUrl: './top-sections.component.html',
  styleUrls: ['./top-sections.component.scss']
})
export class TopSectionsComponent implements OnInit {

  public topSections: Section[];

  constructor(
    public sectionService: SectionService,
    public imageService: ImageService,
  ) { }

  public ngOnInit(): void {
    this.getTopSections();
  }

  private getTopSections() {
    this.sectionService.getTopSections(true).subscribe((sections: Section[]) => {
      this.topSections = sections;
    });
  }

}
