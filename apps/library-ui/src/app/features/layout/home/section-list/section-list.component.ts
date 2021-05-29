import { Section, SectionService } from '@lib/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'library-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {

  public sections: Section[];

  constructor(
    public sectionService: SectionService,
  ) { }

  public ngOnInit(): void {
    this.getSections();
  }

  private getSections() {
    this.sectionService.getTopSections().subscribe((sections: Section[]) => {
      this.sections = sections;
    });
  }

}
