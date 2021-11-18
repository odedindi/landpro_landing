export const isDev = process.env.NODE_ENV === 'development';

export enum Routes {
	about = '/about',
	home = '/',
	map = '/carbonmap',
}

// polygon context
export const ADD_TABLE_DATA = 'ADD_TABLE_DATA';
export const DEL_DATA_FROM_TABLE = 'DEL_DATA_FROM_TABLE';
export const SHOW_SUBPOLYGON = 'SHOW_SUBPOLYGON';

// auth context
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

// const localUrl = 'http://0.0.0.0:8000/';
const serverUrl = 'https://landpro.ch/';
export const url =
	/*process.env.NODE_ENV === 'development' ? localUrl :*/ serverUrl;
