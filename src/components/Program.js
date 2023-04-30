import React from 'react';

// import icons
import PhoneIcon from '../assets/img/phone.svg';

const Program = () => {
  return (
    <div>
      <div className='flex lg:gap-x-[10px] items-baseline justify-end'>
        <img
          className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]'
          src={PhoneIcon}
          alt=''
        />
        <div className='lg:text-[23px] text-blue font-extrabold'>
          + 39 000 00 00 000
        </div>
      </div>
      <div className='text-sm'>
        <div className='hidden lg:flex'>
          Orari di apertura: Lun - Dom: 10:00 - 18:00
        </div>
        <div className='lg:hidden text-right'>Lun - Dom: 10:00 - 18:00</div>
      </div>
    </div>
  );
};

export default Program;
