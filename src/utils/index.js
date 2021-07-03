export const required = (value) => (value ? undefined : 'Thid is a required field');

export const delay = (milliSeconds) => new Promise((res) => setTimeout(res, milliSeconds));

export const generateId = () => new Date().getTime().toString(36);
