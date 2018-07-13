import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzFormatBeforeDropEvent, NzFormatEmitEvent } from './interface';
import { NzTreeNode } from './nz-tree-node';
import { NzTreeService } from './nz-tree.service';
export declare class NzTreeComponent implements OnInit {
    nzTreeService: NzTreeService;
    _searchValue: any;
    _showLine: boolean;
    _prefixCls: string;
    classMap: {
        [x: string]: boolean;
        [ 'draggable-tree' ]: boolean;
    };
    ngModelNodes: NzTreeNode[];
    defaultCheckedKeys: string[];
    nzTreeTemplate: TemplateRef<{}>;
    nzCheckStrictly: boolean;
    nzCheckable: any;
    nzShowExpand: boolean;
    nzAsyncData: boolean;
    nzDraggable: any;
    nzMultiple: any;
    nzDefaultExpandAll: boolean;
    nzDefaultExpandedKeys: string[];
    nzDefaultSelectedKeys: string[];
    nzBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    nzDefaultCheckedKeys: string[];
    nzShowLine: boolean;
    nzSearchValue: string;
    nzOnSearchNode: EventEmitter<NzFormatEmitEvent>;
    nzClick: EventEmitter<NzFormatEmitEvent>;
    nzDblClick: EventEmitter<NzFormatEmitEvent>;
    nzContextMenu: EventEmitter<NzFormatEmitEvent>;
    nzCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    nzExpandChange: EventEmitter<NzFormatEmitEvent>;
    nzOnDragStart: EventEmitter<NzFormatEmitEvent>;
    nzOnDragEnter: EventEmitter<NzFormatEmitEvent>;
    nzOnDragOver: EventEmitter<NzFormatEmitEvent>;
    nzOnDragLeave: EventEmitter<NzFormatEmitEvent>;
    nzOnDrop: EventEmitter<NzFormatEmitEvent>;
    nzOnDragEnd: EventEmitter<NzFormatEmitEvent>;
    onChange: (value: NzTreeNode[]) => void;
    onTouched: () => void;
    setClassMap(): void;
    /**
     * public function
     */
    getCheckedNodeList(): NzTreeNode[];
    getSelectedNodeList(): NzTreeNode[];
    getHalfCheckedNodeList(): NzTreeNode[];
    writeValue(value: NzTreeNode[]): void;
    registerOnChange(fn: (_: NzTreeNode[]) => void): void;
    registerOnTouched(fn: () => void): void;
    constructor(nzTreeService: NzTreeService);
    ngOnInit(): void;
}
