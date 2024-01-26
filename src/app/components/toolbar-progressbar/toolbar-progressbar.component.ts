import { NgStyle } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "app-toolbar-progressbar",
  standalone: true,
  imports: [NgStyle],
  templateUrl: "./toolbar-progressbar.component.html",
  styleUrl: "./toolbar-progressbar.component.scss",
})
export class ToolbarProgressbarComponent {
  @Input() progress: number = 0;

  @HostBinding("style.background-color")
  get bgColor(): string {
    return this.progress > 0 ? "#b3b3b3" : "transparent";
  }
}
