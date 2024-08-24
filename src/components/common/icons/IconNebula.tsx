import { FC } from 'react';
import { FCIcon } from '@/components/common/icons/FCIcon';

export const IconNebula: FC = () => (
  <FCIcon>
    <use xlinkHref="#nebula-small" x="4" y="4" />

    <symbol id="nebula-small" viewBox="0 0 24 24">
      <path fill="black" d="M9.22702 10.3677L7.28777 10.6881L5.9498 9.21636L9.84706 8.44801L13.5167 11.7337V0H15.5V16L9.22702 10.3677Z" />
      <path fill="black" d="M6.7224 5.63226L8.81094 5.29077L9.90172 6.80556L6.10317 7.55198L2.4833 4.2663V16H0.5V0L6.7224 5.63226Z" />
    </symbol>
  </FCIcon>
);