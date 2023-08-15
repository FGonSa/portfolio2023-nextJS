import React from 'react'
import "./sliderCompanies.css"
import Image from 'next/image'

function SliderCompanies() {
  return (
    <>
    <div className='coss'>
      <div className="image-slider">
        <div className="image-slider-track">
            <div className="slide">
                <Image width={250} height={150} alt="logo" className="img"  src="/logos/logo.png" />
            </div>
            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo00.png" />
            </div>
            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo01.png" />
            </div>

            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo02.png" />
            </div>
            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo03.png" />
            </div>
            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo04.png" />
            </div>

            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo05.png" />
            </div>
            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo06.png" />
            </div>
            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo07.png" />
            </div>

            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo.png" />
            </div>
            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo00.png" />
            </div>
            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo01.png" />
            </div>

            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo02.png" />
            </div>
            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo03.png" />
            </div>
            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo04.png" />
            </div>

            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo05.png" />
            </div>
            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo06.png" />
            </div>
            <div className="slide">
                <Image width={250} height={150} alt="company logo"  className="img"  src="/logos/logo07.png" />
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default SliderCompanies