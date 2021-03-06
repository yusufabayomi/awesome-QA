export const required = (value) => (value && value.trim().length ? undefined : 'This is a required field');

export const delay = (milliSeconds) => new Promise((res) => setTimeout(res, milliSeconds));

export const generateId = () => new Date().getTime().toString(36);

export const sortQuestions = (qas) => qas.sort((a, b) => a.question.localeCompare(b.question));
