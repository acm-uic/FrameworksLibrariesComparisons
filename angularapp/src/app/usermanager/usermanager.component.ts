import { Component, OnInit } from '@angular/core';


type User = {
  id : number;
  fname : string;
  lname : string;
  email : string;
}
const ex1 : User = {
  id: 1,
  fname: "John",
  lname: "Snow",
  email: "jsnow@acmuic.org"
};
const ex2 : User = {
  id: 2,
  fname: "Christian",
  lname: "Bingman",
  email: "cbingm@acmiuc.org"
};

@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.scss']
})

export class UsermanagerComponent implements OnInit {

  userList : User[] = [ex1,ex2];
  isSearching : boolean = false;
  searchList : User[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  onDelete(id : number){
    this.userList = this.userList.filter(el => el.id != id);
  }

  onCreate(fname : string, lname : string, email : string){
    this.userList.push({id: this.userList.length == 0 ? 1 : this.userList[this.userList.length-1].id+1, fname: fname, lname: lname, email: email})
  }

  onSearch(event: any){
    if(event.target.value != ''){
      this.isSearching = true;
      this.searchList = this.userList.filter(el => el.email.includes(event.target.value));
    } else {
      this.isSearching = false;
    }
  }

}
