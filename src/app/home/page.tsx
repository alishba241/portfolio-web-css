import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function HomePage() {
  return (
    <div className='hero-sec'>
      <div className='text-sec'>
        <h2 className='heading-one'>Hello, It&#39;s Me</h2><br />
        <h2 className='heading-two'>Alishba Naveed</h2><br />
        <p className='para-one'>And I&#39;m</p>
        <p className='para-two' id='rub-effect'> Frontend Developer</p>
        <br />
        <div className='link-buttons'>
          <Link href='https://www.linkedin.com/in/alishba-naveed-a9ab38251/' target='_blank' >
            <button className='btn-one'>Linkedin</button>
          </Link>
          <Link href='https://github.com/alishba241?tab=repositories' target='_blank'>
            <button className='btn-one'>GitHub</button>
          </Link>
        </div>
      </div>
      <div className=' img-outer'>
        <div className='img-inner'>
          <Image
            src='/images__29_-removebg-preview (1).png' 
            alt='profile photo'
            className='image'
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>



  );
}

export default HomePage;
