import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor, AfterViewInit {

  @Output() btnClickEmitter = new EventEmitter();

  public value = '';
  public disabled = false;

  @Input() id: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() maxlength: number;
  @Input() src: string;
  @Input() alt: string;
  @Input() labelText: string;
  @Input() error: boolean;
  @Input() hasOnInputEvent: boolean;
  @Input() hasOnChangeEvent: boolean;

  constructor(private elementRef: ElementRef) { }

  public ngAfterViewInit(): void {
    if (this.hasOnInputEvent) {
      this.elementRef.nativeElement.querySelector('#' + this.id)
        .addEventListener('input', (event) => { this.updateValue(event.target.value); });
    }
    if (this.hasOnChangeEvent) {
      this.elementRef.nativeElement.querySelector('#' + this.id)
        .addEventListener('change', (event) => { this.updateValue(event.target.value); });
    }
  }

  private onChange = (value: any) => { };
  private onTouched = () => { };

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(outsideValue: string): void {
    this.value = outsideValue;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public updateValue(insideValue: string): void {
    this.value = insideValue;
    this.onChange(insideValue);
    this.onTouched();
  }

  public btnClick(): void {
    this.btnClickEmitter.emit();
  }
}
