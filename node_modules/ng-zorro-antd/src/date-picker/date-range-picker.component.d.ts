import { EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { FunctionProp } from '../core/types/common-wrap';
import { LoggerService } from '../core/util/logger/logger.service';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { CandyDate } from './lib/candy-date';
import { AbstractPickerComponent } from './abstract-picker.component';
import { DisabledTimeFn, PanelMode, PresetRanges } from './standard-types';
export declare class DateRangePickerComponent extends AbstractPickerComponent implements OnInit, OnChanges {
    private logger;
    showWeek: boolean;
    nzDateRender: FunctionProp<TemplateRef<Date> | string>;
    nzDisabledTime: DisabledTimeFn;
    nzRenderExtraFooter: FunctionProp<TemplateRef<void> | string>;
    nzShowToday: boolean;
    nzMode: PanelMode | PanelMode[];
    nzRanges: FunctionProp<PresetRanges>;
    nzOnPanelChange: EventEmitter<"time" | "month" | "year" | "decade" | "date" | PanelMode[]>;
    private _showTime;
    nzShowTime: object | boolean;
    nzOnOk: EventEmitter<Date | Date[]>;
    readonly realShowToday: boolean;
    extraFooter: TemplateRef<void> | string;
    constructor(i18n: NzI18nService, logger: LoggerService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onValueChange(value: CandyDate): void;
    onResultOk(): void;
    onOpenChange(open: boolean): void;
}
