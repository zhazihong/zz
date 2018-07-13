import { Overlay } from '@angular/cdk/overlay';
import { NgZone, TemplateRef } from '@angular/core';
import { NzDropdownContextComponent } from './nz-dropdown-context.component';
export declare class NzDropdownService {
    private overlay;
    private document;
    private zone;
    protected instance: NzDropdownContextComponent;
    private overlayRef;
    private locatePoint;
    private positionStrategy;
    private backdropClickSubscription;
    private detachmentsSubscription;
    private onPositionChangeSubscription;
    private positions;
    constructor(overlay: Overlay, document: any, zone: NgZone);
    private createOverlay($event);
    private handlePositionChanges(strategy);
    private handleCloseEvent(overlayRef);
    private createPoint(e);
    private removePoint();
    private setInstanceValue(instance, template);
    create($event: MouseEvent, template: TemplateRef<void>): NzDropdownContextComponent;
    close(): void;
}
