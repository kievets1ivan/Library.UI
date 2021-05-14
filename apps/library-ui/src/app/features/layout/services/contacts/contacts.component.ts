import { Component, OnInit } from '@angular/core';

interface Day {
  day: string,
  time: string,
}

@Component({
  selector: 'library-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public week: Day[] = [
    { day: 'SERVICES.CONTACTS.DAYS.MONDAY', time: 'SERVICES.CONTACTS.TIME.MONDAY' },
    { day: 'SERVICES.CONTACTS.DAYS.TUESDAY', time: 'SERVICES.CONTACTS.TIME.TUESDAY' },
    { day: 'SERVICES.CONTACTS.DAYS.WEDNESDAY', time: 'SERVICES.CONTACTS.TIME.WEDNESDAY' },
    { day: 'SERVICES.CONTACTS.DAYS.THURSDAY', time: 'SERVICES.CONTACTS.TIME.THURSDAY' },
    { day: 'SERVICES.CONTACTS.DAYS.FRIDAY', time: 'SERVICES.CONTACTS.TIME.FRIDAY' },
    { day: 'SERVICES.CONTACTS.DAYS.SATARDAY', time: 'SERVICES.CONTACTS.TIME.DAY_OFF' },
    { day: 'SERVICES.CONTACTS.DAYS.SUNDAY', time: 'SERVICES.CONTACTS.TIME.DAY_OFF' },
  ];

  public selectedDay: Day;

  constructor() { }

  public ngOnInit(): void {
    this.selectedDay = this.week[0];
  }

  public selectDay(day: Day): void {
    this.selectedDay = day;
  }

}
