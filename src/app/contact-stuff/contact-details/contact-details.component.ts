import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contactId: number;

  constructor(
    private routeThing: ActivatedRoute
  ) { }

  ngOnInit() {
    //when the component is loaded, retrieve the URL params

    //req.params.id
    this.routeThing.params.subscribe((actualParams) => {
      this.contactId = actualParams.id;
    });
  }

}
