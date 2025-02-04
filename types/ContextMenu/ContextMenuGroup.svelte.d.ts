/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ContextMenuGroupProps {
  /**
   * @default []
   */
  selectedIds?: string[];

  /**
   * Specify the label text
   * @default ""
   */
  labelText?: string;
}

export default class ContextMenuGroup extends SvelteComponentTyped<
  ContextMenuGroupProps,
  {},
  { default: {} }
> {}
