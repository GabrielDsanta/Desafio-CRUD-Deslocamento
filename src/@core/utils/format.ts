import { DateTimeFormatOptions } from 'intl';

/**
 * @param {String} value 
 * @param {Object} formatting 
 */

export const formatDate = (value: string, formatting: Partial<DateTimeFormatOptions> = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value) return value;

  return new Intl.DateTimeFormat('pt-BR', formatting).format(new Date(value));
}
