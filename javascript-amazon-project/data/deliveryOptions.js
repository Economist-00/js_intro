'use strict';


import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";


export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];


export const getDeliveryOption = (deliveryOptionId) => {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}


export const calculateDeliveryDate = (deliveryOption) => {
  const today = dayjs();
  const { deliveryDays } = deliveryOption;

  let realDeliveryDays = 0;
  let remainingDays = deliveryDays;
  let deliveryDate;

  while (remainingDays > 0) {
    realDeliveryDays++;
    deliveryDate = today.add(
      realDeliveryDays,
      'days'
    );
    const dayOfWeek = deliveryDate.format('dddd');
    if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
      continue;
    }
    remainingDays--;
  }

  const dateString = deliveryDate.format(
    'dddd, MMMM D'
  );
  return dateString;
}