import { ElementRef } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
export declare class NzOptionLiComponent {
    private elementRef;
    el: Element;
    selected: boolean;
    active: boolean;
    nzOption: NzOptionComponent;
    nzShowActive: boolean;
    compareWith: (o1: any, o2: any) => boolean;
    nzActiveOption: NzOptionComponent;
    nzListOfSelectedValue: any[];
    constructor(elementRef: ElementRef);
}
