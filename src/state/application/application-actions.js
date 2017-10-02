export const CHANGE_TITLE = 'CHANGE_TITLE';

export function changeTitle(text) {
	return { type: CHANGE_TITLE, text };
}