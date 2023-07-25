import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
//   @Input() inputId!: string;
//   @Input() placeholder!: string;
//   @Input() isSearchInput: boolean = false; 
// value!: string;

  // @Input() inputId!: string;
  // @Input() placeholder!: string;
  // @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  // inputValue: string = '';

  // onButtonClick(): void {
  //   this.buttonClicked.emit(this.inputValue);
  // }

   @Input() placeholder: string='Search';
  @Input() iconClass: string='far fa fa-search';
  @Output() iconClick: EventEmitter<any> = new EventEmitter();
  @ViewChild('inputField') inputField!: ElementRef<HTMLInputElement>;
  constructor() { }
  ngOnInit(): void {
  }
  onIconClick() {
    this.iconClick.emit();
  }

  getValue(): string {
    return this.inputField.nativeElement.value;
  }
}
