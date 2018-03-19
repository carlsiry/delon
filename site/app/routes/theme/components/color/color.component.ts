import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'color',
    templateUrl: './color.component.html',
    styleUrls: [ './color.component.less' ]
})
export class ColorComponent {
    @Input() value: string;
    @Output() valueChange = new EventEmitter<string>();

    change(res: any) {
        this.value = res.color.hex;
        this.valueChange.emit(this.value);
    }
}
