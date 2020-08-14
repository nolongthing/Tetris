import $ from 'jquery';
import { Square } from "../Square";
import { IViewer } from "../types";
import PageConfig from "./PageConfig";

export class SquarePageViewer implements IViewer {
  private dom?: JQuery<HTMLElement>
  private isRemove: boolean = false
  constructor(
    private square: Square,
    private container: JQuery<HTMLElement>,
  ) {

  }

  show() {
    if (!this.dom) {
      this.dom = $('<div>').css({
        position: "absolute",
        width: PageConfig.SquareSize.width,
        height: PageConfig.SquareSize.height,
        border: "1px solid #ccc",
        boxSizing: 'border-box'
      }).appendTo(this.container);
    }
    this.dom.css({
      left: this.square.point.x * PageConfig.SquareSize.width,
      top: this.square.point.y * PageConfig.SquareSize.height,
      background: this.square.color
    })
  }
  remove() {
    if (this.dom && !this.isRemove) {
      this.dom.remove();
      this.isRemove = true;
    }
  }
}