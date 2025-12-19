'use strict';


export const formatCurrency = (priceCents) => {
  return (priceCents / 100).toFixed(2);
}