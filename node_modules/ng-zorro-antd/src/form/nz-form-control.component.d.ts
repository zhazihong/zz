import { AfterContentInit, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NzColComponent } from '../grid/nz-col.component';
export declare class NzFormControlComponent extends NzColComponent implements OnDestroy, OnInit, AfterContentInit {
    private _hasFeedback;
    validateChanges: Subscription;
    validateString: string;
    controlStatus: string;
    controlClassMap: any;
    validateControl: FormControl;
    nzHasFeedback: boolean;
    nzValidateStatus: string | FormControl;
    removeSubscribe(): void;
    updateValidateStatus(status: string): void;
    watchControl(): void;
    setControlClassMap(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
}
