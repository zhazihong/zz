import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { NzDropDownComponent } from '../dropdown/nz-dropdown.component';
export declare type NzThFilterType = Array<{
    text: string;
    value: any;
}>;
export interface NzThItemInterface {
    text: string;
    value: any;
    checked: boolean;
}
export declare class NzThComponent {
    private elementRef;
    private renderer;
    private _sort;
    private _filters;
    private _showSort;
    private _showFilter;
    private _showCheckbox;
    private _showRowSelection;
    el: HTMLElement;
    hasFilterValue: boolean;
    multipleFilterList: NzThItemInterface[];
    singleFilterList: NzThItemInterface[];
    nzSelections: Array<{
        text: string;
        onSelect: any;
    }>;
    nzChecked: boolean;
    nzDisabled: boolean;
    nzIndeterminate: boolean;
    nzSortKey: string;
    nzFilterMultiple: boolean;
    nzWidth: string;
    nzCheckedChange: EventEmitter<boolean>;
    nzDropDownComponent: NzDropDownComponent;
    nzSortChange: EventEmitter<string>;
    nzSortChangeWithKey: EventEmitter<{
        key: string;
        value: string;
    }>;
    nzFilterChange: EventEmitter<any>;
    readonly hasFiltersClass: boolean;
    nzShowSort: boolean;
    nzShowFilter: boolean;
    nzShowRowSelection: boolean;
    nzLeft: string;
    nzRight: string;
    nzExpand: boolean;
    nzShowCheckbox: boolean;
    nzSort: string;
    setSortValue(value: string): void;
    readonly filterList: NzThItemInterface[];
    readonly filterValue: any;
    updateFilterStatus(): void;
    search(): void;
    reset(): void;
    checkMultiple(filter: NzThItemInterface): void;
    checkSingle(filter: NzThItemInterface): void;
    hideDropDown(): void;
    dropDownVisibleChange(value: boolean): void;
    nzFilters: NzThFilterType;
    initMultipleFilterList(): void;
    initSingleFilterList(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
