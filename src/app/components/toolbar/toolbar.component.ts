import { Component, Input } from "@angular/core";
import { ToolbarProgressbarComponent } from "../toolbar-progressbar/toolbar-progressbar.component";
import { ProgressService } from "../../services/progress.service";

@Component({
  selector: "app-toolbar",
  standalone: true,
  imports: [ToolbarProgressbarComponent],
  templateUrl: "./toolbar.component.html",
  styleUrl: "./toolbar.component.scss",
})
export class ToolbarComponent {
  constructor(public progress: ProgressService) {}
}
