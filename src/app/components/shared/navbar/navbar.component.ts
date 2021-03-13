import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  ViewChildren,
  QueryList,
} from "@angular/core";
import { Router } from "@angular/router";
// import * as $ from "jquery";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @ViewChild("dropDwonElement") dropDwonElement: ElementRef;
  @ViewChild("dropDwonResponsive") dropDwonResponsive: ElementRef;

  status: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  clickEvent() {
    this.status = !this.status;
  }

  removeClass() {
    if (this.dropDwonElement.nativeElement.classList.contains("dropdown-toggle-opened")) {
      this.status = !this.status;
    }
    // this.status = !this.status;
    // this.dropDwonElement.nativeElement.classList.remove(
    //   "dropdown-toggle-opened"
    // );
    // this.dropDwonElement.nativeElement.classList.add("dropdown-toggle-closed");
  }
}
