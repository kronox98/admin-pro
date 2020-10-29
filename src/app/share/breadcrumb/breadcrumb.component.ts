import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from "rxjs/operators";
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [
  ]
})
export class BreadcrumbComponent implements OnInit {

  public title: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
    .pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data)
    )
    .subscribe( data => {
      console.log(data);
      this.title = data.title;
    })
  }

}
