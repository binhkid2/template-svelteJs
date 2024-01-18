
import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
// Session based theme store. Grabs the current theme from the current body.
export const storeTheme = writable( document.body.getAttribute('data-theme') );
export const currentThemeStore = writable('skeleton')
export const currentPersonIdStore = writable(0)
