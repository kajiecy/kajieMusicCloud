import {ComponentOptions, CreateElement, VNode, WatchOptions} from 'vue';
import {ScopedSlot} from 'vue/types/vnode';
import {Vue} from 'vue/types/vue';
import lodash from 'lodash';
declare module '*.vue' {
  export default Vue;
}
declare module 'vue/types/vue' {
    export interface Vue {
        readonly $myUtil: any;
        readonly _: typeof lodash;

        readonly $el: Element;
        readonly $options: ComponentOptions<Vue>;
        readonly $parent: Vue;
        readonly $root: Vue;
        readonly $children: Vue[];
        readonly $refs: { [key: string]: Vue | Element | Vue[] | Element[] };
        readonly $slots: { [key: string]: VNode[] | undefined };
        readonly $scopedSlots: { [key: string]: ScopedSlot | undefined };
        readonly $isServer: boolean;
        readonly $data: Record<string, any>;
        readonly $props: Record<string, any>;
        readonly $ssrContext: any;
        readonly $vnode: VNode;
        readonly $attrs: Record<string, string>;
        readonly $listeners: Record<string, Function | Function[]>;

        $mount(elementOrSelector?: Element | string, hydrating?: boolean): this;
        $forceUpdate(): void;
        $destroy(): void;
        $set: typeof Vue.set;
        $delete: typeof Vue.delete;
        $watch(
                expOrFn: string,
                callback: (this: this, n: any, o: any) => void,
                options?: WatchOptions
        ): (() => void);
        $watch<T>(
                expOrFn: (this: this) => T,
                callback: (this: this, n: T, o: T) => void,
                options?: WatchOptions
        ): (() => void);
        $on(event: string | string[], callback: Function): this;
        $once(event: string | string[], callback: Function): this;
        $off(event?: string | string[], callback?: Function): this;
        $emit(event: string, ...args: any[]): this;
        $nextTick(callback: (this: this) => void): void;
        $nextTick(): Promise<void>;
        $createElement: CreateElement;
    }
}
