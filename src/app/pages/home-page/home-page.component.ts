import { Component, HostListener } from "@angular/core";
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { SectionIntroductionComponent } from "../../components/section-introduction/section-introduction.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [ToolbarComponent, SectionIntroductionComponent],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
})
export class HomePageComponent {
  offset: number = 0;
  @HostListener("wheel", ["$event"])
  scroll(e: any) {
    this.offset += e.deltaY;
    if (this.offset < 0) {
      this.offset = 0;
    }
  }
}
