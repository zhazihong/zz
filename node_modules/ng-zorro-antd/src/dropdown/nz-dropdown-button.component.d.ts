import { AfterViewInit, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzDropDownComponent } from './nz-dropdown.component';
export declare class NzDropDownButtonComponent extends NzDropDownComponent implements OnInit, OnDestroy, AfterViewInit {
    nzSize: string;
    nzType: string;
    content: any;
    nzClick: EventEmitter<MouseEvent>;
    nzOrigin: any;
    onVisibleChange: (visible: boolean) => void;
    /** rewrite afterViewInit hook */
    ngAfterViewInit(): void;
}
