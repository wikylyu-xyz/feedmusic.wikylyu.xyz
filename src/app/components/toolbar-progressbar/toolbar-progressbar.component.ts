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

  @HostBinding("style.opacity")
  get bgColor(): number {
    return this.progress > 0 ? 1 : 0;
  }
}
