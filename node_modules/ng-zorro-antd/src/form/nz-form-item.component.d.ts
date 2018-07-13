import { NzRowComponent } from '../grid/nz-row.component';
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
export declare class NzFormItemComponent extends NzRowComponent {
    private _flex;
    withHelp: number;
    nzFlex: boolean;
    enableHelp(): void;
    disableHelp(): void;
}
