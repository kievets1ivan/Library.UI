import { AfterViewInit, Component, ElementRef, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true
  }]
})
export class TextareaComponent implements ControlValueAccessor, AfterViewInit {

  public value = '';

  @Input() id: string;
  @Input() placeholder: string;
  @Input() maxlength: number;
  @Input() error: boolean;
  @Input() hasOnInputEvent: boolean;
  @Input() hasOnChangeEvent: boolean;

  constructor(
    private elementRef: ElementRef
  ) { }

  public ngAfterViewInit(): void {
    if (this.hasOnInputEvent) {
      this.elementRef.nativeElement.querySelector('#' + this.id)
        .addEventListener('input', (event) => {
          this.updateValue(event.target.value);
          console.log(this.value);
        });
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

  public updateValue(insideValue: string): void {
    this.value = insideValue;
    this.onChange(insideValue);
    this.onTouched();
  }

}
