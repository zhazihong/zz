import { NzFormatEmitEvent } from './interface';
import { NzTreeNode } from './nz-tree-node';
export declare class NzTreeService {
    DRAG_SIDE_RANGE: number;
    DRAG_MIN_GAP: number;
    selectedNode: NzTreeNode;
    targetNode: NzTreeNode;
    rootNodes: NzTreeNode[];
    selectedNodeList: NzTreeNode[];
    checkedNodeList: NzTreeNode[];
    halfCheckedNodeList: NzTreeNode[];
    matchedNodeList: NzTreeNode[];
    /**
     * init data to NzTreeNode
     */
    initCheckedStatus(childNode: NzTreeNode, defaultCheckedKeys: string[], nzCheckStrictly: boolean): void;
    initTreeNodes(root: NzTreeNode[], defaultCheckedKeys?: string[], nzCheckStrictly?: boolean): NzTreeNode[];
    /**
     * init checkBox state
     */
    initParentNode(node: NzTreeNode): void;
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    checkTreeNodeParents(node: NzTreeNode): void;
    setSelectedNode(node: NzTreeNode | null): void;
    getSelectedNode(): NzTreeNode | null;
    setSelectedNodeList(node: NzTreeNode, isMultiple: boolean): void;
    getSelectedNodeList(): NzTreeNode[];
    /**
     * merge checked nodes
     */
    setCheckedNodeListStrict(node: NzTreeNode): void;
    setCheckedNodeList(node: NzTreeNode): void;
    /**
     * return checked nodes
     */
    getCheckedNodeList(): NzTreeNode[];
    /**
     * return half checked nodes
     * @returns {NzTreeNode[]}
     */
    getHalfCheckedNodeList(): NzTreeNode[];
    /**
     * return search matched nodes
     */
    getMatchedNodeList(): NzTreeNode[];
    /**
     * keep selected state if isMultiple is true
     */
    initNodeActive(node: NzTreeNode, isMultiple?: boolean): void;
    resetNodeActive(node: NzTreeNode): void;
    /**
     * click checkbox
     */
    checkTreeNode(node: NzTreeNode): void;
    /**
     * reset child check state
     */
    checkTreeNodeChildren(node: NzTreeNode, value: boolean): void;
    /**
     * search & expand node
     */
    searchExpand(value: string): void;
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    dropAndApply(targetNode: NzTreeNode, dragPos?: number): void;
    resetNodeLevel(node: NzTreeNode): void;
    calcDropPosition(e: DragEvent): number;
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    formatEvent(eventName: string, node: NzTreeNode, event: MouseEvent | DragEvent): NzFormatEmitEvent;
}
