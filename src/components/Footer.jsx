import React from 'react'

// Social icons
import Instagram from '../assets/Footer/Instagram.svg'
import Youtube from '../assets/Footer/Youtube.svg'
import LinkedIn from '../assets/Footer/Linkedin.svg'
import X from '../assets/Footer/X.svg'

const Footer = () => {
  return (
    <div className="w-full h-[34vh] flex justify-center items-center pt-14 marcellus">
      <div>
        {/* TOP */}
        <div className="top flex justify-between items-center">
          <div className="text-[40px] py-4 border-r pr-6">
            NUBHÉ
          </div>

          <div className="flex flex-col ml-6">
            <div className="cursor-pointer">FAQ</div>
            <div className="cursor-pointer">Support Chat</div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bottom mt-6.5 ml-8 flex justify-center items-center gap-4">
          <img
            className="size-4.25 cursor-pointer"
            src={Instagram}
            alt="Instagram"
          />
          <img
            className="size-4.25 cursor-pointer"
            src={Youtube}
            alt="YouTube"
          />
          <img
            className="size-4.25 cursor-pointer"
            src={LinkedIn}
            alt="LinkedIn"
          />
          <img
            className="size-4.25 cursor-pointer"
            src={X}
            alt="X"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
