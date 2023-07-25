import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText: string = 'Add Task';
  @Input() isSearch: boolean = false;
  @Input() isEdit: boolean = false;
  @Input() isDelete: boolean = false;
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick(): void {
    this.buttonClicked.emit();
  }
}
