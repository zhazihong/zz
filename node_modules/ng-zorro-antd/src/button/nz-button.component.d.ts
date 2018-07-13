import { AfterContentInit, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export declare type NzButtonType = 'primary' | 'dashed' | 'danger';
export declare type NzButtonShape = 'circle' | null;
export declare type NzButtonSize = 'small' | 'large' | 'default';
export declare class NzButtonComponent implements AfterContentInit {
    private elementRef;
    private cdr;
    private renderer;
    private nzUpdateHostClassService;
    private _ghost;
    private _search;
    private _type;
    private _shape;
    private _size;
    private _loading;
    private el;
    private iconElement;
    private iconOnly;
    private clicked;
    private prefixCls;
    private sizeMap;
    contentElement: ElementRef;
    nzGhost: boolean;
    nzSearch: boolean;
    nzType: NzButtonType;
    nzShape: NzButtonShape;
    nzSize: NzButtonSize;
    nzLoading: boolean;
    /** toggle button clicked animation */
    onClick(): void;
    updateIconDisplay(value: boolean): void;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    setClassMap(): void;
    checkContent(): void;
    moveIcon(): void;
    findFirstNotEmptyNode(value: HTMLElement): Node;
    findLastNotEmptyNode(value: HTMLElement): Node;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService);
    ngAfterContentInit(): void;
}
