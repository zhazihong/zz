import { PipeTransform } from '@angular/core';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
export declare type TFilterOption = (input?: string, option?: NzOptionComponent) => boolean;
export declare class NzOptionPipe implements PipeTransform {
    transform(options: NzOptionComponent[], input: string, filterOption: TFilterOption, serverSearch: boolean): NzOptionComponent[];
}
export declare class NzSubOptionPipe implements PipeTransform {
    transform(groups: NzOptionGroupComponent[], input: string, filterOption: TFilterOption, serverSearch: boolean): NzOptionGroupComponent[];
}
export declare function defaultFilterOption(input: string, option: NzOptionComponent): boolean;
