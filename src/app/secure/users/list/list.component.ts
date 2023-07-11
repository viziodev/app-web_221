import { User } from 'src/app/shared/interfaces/user';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { RestResponse } from 'src/app/shared/interfaces/rest-response';

@Component({
  selector: 'e221-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: User[] = [];
  meta: any;
  url: string | null = null;
  constructor(private userServ: UserService) {}
  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.userServ.all(this.url).subscribe((res: RestResponse) => {
      this.users = res.data;
      this.meta = res.meta;
      console.log(this.meta);
    });
  }
  onPaginate(url: string): void {
    this.url = url;
    this.refresh();
  }
}
