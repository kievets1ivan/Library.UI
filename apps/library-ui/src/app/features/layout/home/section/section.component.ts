import { Component, Input, OnInit } from '@angular/core';
import { Section, ImageService } from '@lib/common';

@Component({
  selector: 'library-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() public section: Section;

  constructor(
    public imageService: ImageService
  ) { }

  ngOnInit() {
  }

}
