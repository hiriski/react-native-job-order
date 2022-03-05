/**
 * JavaScript Code Snippet
 * Convert Number to Rupiah & vice versa
 * https://gist.github.com/845309
 *
 * Copyright 2011-2012, Faisalman
 * Licensed under The MIT License
 * http://www.opensource.org/licenses/mit-license
 *
 */

export const convertToRupiah = (angka: number): string => {
  let rupiah = '';
  const angkarev = angka.toString().split('').reverse().join('');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += `${angkarev.substr(i, 3)}.`;
  return `Rp${rupiah
    .split('', rupiah.length - 1)
    .reverse()
    .join('')}`;
};
/**
 * Usage example:
 * alert(convertToRupiah(10000000)); -> "Rp. 10.000.000"
 */
