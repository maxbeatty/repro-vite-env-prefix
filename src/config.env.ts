export const isWorking = true;

// vite's built-in env vars
export const baseURL = import.meta.env.BASE_URL;
export const environment = import.meta.env.MODE;

// vite define
declare const __IS_LOCAL__: string;
export const isLocal = __IS_LOCAL__;

// vite env
const appTitle = import.meta.env.VITE_APP_TITLE;
if (typeof appTitle !== 'string' || appTitle === '') {
    throw new Error('import.meta.env.VITE_APP_TITLE is undefined')
}

export const title = appTitle;
