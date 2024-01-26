import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ToolbarProgressbarComponent } from "../toolbar-progressbar/toolbar-progressbar.component";
import { ProgressService } from "../../services/progress.service";
import { MatButtonModule } from "@angular/material/button";
@Component({
  selector: "app-toolbar",
  standalone: true,
  imports: [ToolbarProgressbarComponent, MatButtonModule],
  templateUrl: "./toolbar.component.html",
  styleUrl: "./toolbar.component.scss",
})
export class ToolbarComponent {
  @Output() sectionClicked = new EventEmitter<number>();
  constructor(public progress: ProgressService) {}
}
