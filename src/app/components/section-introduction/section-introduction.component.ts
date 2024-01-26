import { NgStyle } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { ProgressService } from "../../services/progress.service";

@Component({
  selector: "app-section-introduction",
  standalone: true,
  imports: [NgStyle],
  templateUrl: "./section-introduction.component.html",
  styleUrl: "./section-introduction.component.scss",
})
export class SectionIntroductionComponent implements OnChanges, AfterViewInit {
  @Input() offset: number = 0;
  @ViewChildren("starline") lines!: QueryList<ElementRef>;
  @ViewChild("starwars") starwars!: ElementRef;
  max: number = 6000.0;

  constructor(private progress: ProgressService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.offset < 0) {
      this.offset = 0;
    } else if (this.offset > this.max) {
      this.offset = this.max;
    }
    if (this.lines) {
      this.update();
    }
  }

  ngAfterViewInit(): void {
    this.update();
  }

  stepY = 80;
  stepScale = 1.15;
  stepScaleAfter = 1.1;
  stepOpacity = 1 / 3;
  stepOpacityAfter = 0.2;

  update() {
    const per = this.max / this.lines.length;
    const rate = this.offset / per;
    var ratio = rate % 1;
    const index = Math.min(this.lines.length - 1, Math.floor(rate));
    if (index === this.lines.length - 1) {
      ratio = 0;
    }
    this.progress.progress1.set(((index + 1) / this.lines.length) * 100);
    const opacity = 1 - this.stepOpacity * ratio;
    const translateY = this.stepY * ratio;
    const scale = Math.pow(this.stepScale, ratio);
    this.lines.get(
      index
    )!.nativeElement.style = `opacity:${opacity};transform:translateY(-${translateY}px) scale(${scale});`;

    for (let i = 0; i < index; i++) {
      const translateY =
        (this.stepY + (index - i) * 5) * (index - i) + this.stepY * ratio;
      const scale = Math.pow(this.stepScale, index - i + ratio);
      const opacity =
        1 - (index - i) * this.stepOpacity - this.stepOpacity * ratio;
      this.lines.get(
        i
      )!.nativeElement.style = `opacity:${opacity};transform:translateY(-${translateY}px) scale(${scale})`;
    }

    if (index + 1 < this.lines.length - 1) {
      for (let i = index + 1; i < this.lines.length; i++) {
        const translateY =
          ((this.stepY * 4) / 5) * (i - index) - this.stepY * ratio;
        const scale = Math.pow(1 / this.stepScaleAfter, i - index + 1 - ratio);
        const opacity =
          1 -
          (i - index) * this.stepOpacityAfter -
          this.stepOpacityAfter * (1 - ratio);
        this.lines.get(
          i
        )!.nativeElement.style = `opacity:${opacity};transform:translateY(${translateY}px) scale(${scale})`;
      }
    }
  }
}
