import { Component, HostListener } from "@angular/core";
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { SectionIntroductionComponent } from "../../components/section-introduction/section-introduction.component";
import { SectionTechnologyComponent } from "../../components/section-technology/section-technology.component";
import { animate, style, transition, trigger } from "@angular/animations";
import { ProgressService } from "../../services/progress.service";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [
    ToolbarComponent,
    SectionIntroductionComponent,
    SectionTechnologyComponent,
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  animations: [
    trigger("introduction-show", [
      transition(":leave", animate("0s 1s ease-in-out", style({ opacity: 0 }))),
    ]),
    trigger("white-show", [
      transition(":enter", [
        style({ top: "100%" }),
        animate("1s ease-in-out", style({ top: "-200%" })),
      ]),
      transition(":leave", [
        style({ top: "-200%" }),
        animate("1s ease-in-out", style({ top: "100%" })),
      ]),
    ]),
    trigger("purple-show", [
      transition(":enter", [
        style({ top: "200%" }),
        animate("1s ease-in-out", style({ top: "-100%" })),
      ]),
      transition(":leave", [
        style({ top: "-100%" }),
        animate("1s ease-in-out", style({ top: "200%" })),
      ]),
    ]),
    trigger("technology-show", [
      transition(":enter", [
        style({ top: "300%" }),
        animate("1s ease-in-out", style({ top: "0px" })),
      ]),
      transition(":leave", [
        style({ top: "0px" }),
        animate("1s ease-in-out", style({ top: "300%" })),
      ]),
    ]),
  ],
})
export class HomePageComponent {
  constructor(private progress: ProgressService) {}
  offset: number = 0;
  @HostListener("wheel", ["$event"])
  scroll(e: any) {
    this.scrollUpdate(e.deltaY);
  }

  touchScreenY: number = -1;
  @HostListener("touchend", ["$envet"])
  @HostListener("touchstart", ["$event"])
  @HostListener("touchmove", ["$event"])
  touchmove(e: any) {
    if (!e || !e.changedTouches) {
      this.touchScreenY = -1;
    } else if (this.touchScreenY < 0) {
      this.touchScreenY = e.changedTouches[0].screenY;
    } else {
      const deltaY = (this.touchScreenY - e.changedTouches[0].screenY) * 2.4;
      this.touchScreenY = e.changedTouches[0].screenY;
      this.scrollUpdate(deltaY);
    }
  }

  scrollUpdate(deltaY: number) {
    if (this.disabled) {
      return;
    }
    this.offset += deltaY;
    if (this.offset < 0) {
      this.offset = 0;
    }
    if (
      this.sectionIntroductionEnded > 0 &&
      this.offset - this.sectionIntroductionEnded > 1000
    ) {
      this.section = 1;
      this.progress.progress2.set(100);
    }
    if (
      this.section === 1 &&
      this.offset - this.sectionIntroductionEnded < 500
    ) {
      this.section = 0;
      this.sectionIntroductionEnded = 0;
      this.progress.progress2.set(0);
    }
  }

  disabled = false;

  onSectionClicked(i: number) {
    if (this.section === i) {
      return;
    }
    if (i === 0) {
      this.section = 0;
      this.progress.progress2.set(0);
      this.sectionIntroductionEnded = 0;
      this.offset = 0;
    } else if (i === 1) {
      this.section = 1;
      this.sectionIntroductionEnded = 6000;
      this.offset = 7000;
      this.progress.progress2.set(100);
    }
  }

  onSectionIntroductionEnded() {
    if (this.sectionIntroductionEnded === 0) {
      this.sectionIntroductionEnded = this.offset;
    }
  }
  section: number = 0;
  sectionIntroductionEnded: number = 0;
}
