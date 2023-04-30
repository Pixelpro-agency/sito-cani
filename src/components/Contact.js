import React from 'react';

// import image
import DogImg from '../assets/img/dogs/dog-contact.png';

const Contact = () => {
  return (
    <section className='bg-yellow-secondary pt-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-around'>
          {/* image */}
          <div className='order-1 lg:-order-1 lg:mt-16'>
            <img className='-mb-[12px]' src={DogImg} alt='' />
          </div>
          {/* text */}
          <div className='flex flex-col items-center justify-center'>
            <div className='text-orange font-semibold mb-3'>Contatti</div>
            <div className='text-4xl text-blue font-extrabold'>
              + 39 000 00 00 000
            </div>
            <div className='mb-7 text-blue'>
              Orari di apertura: Lun - Dom: 10:00 - 18:00
            </div>
            <button className='btn'>Prendi un appuntamento</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
