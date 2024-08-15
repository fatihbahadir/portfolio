"use client";
import { SOCIALS } from '@/data/data';
import { bebas_neue } from '@/lib/fonts';
import { handleCvDownload } from '@/lib/utils';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import SocialButton from '../common/socialButton';

const Information = () => {
  return (
    <div className="flex-column items-start justify-center gap-2 lg:gap-5 ">
      <h2
        className={`${bebas_neue.className} uppercase  text-[57px] lg:text-[90px] xl:text-[101px] leading-[90%] `}
      >
        let&apos;s connect
      </h2>
      <p className="text-[16px] lg:text-[17px] xl:text-lg font-[300] text-off-white leading-[150%]">
        Say hello at{' '}
        <a
          className="text-white  underline decoration-primary underline-offset-8 ml-1 transition-all hover:tracking-wide "
          href="mailto:hunkarhyme@gmail.com"
        >
          hunkarhyme@gmail.com
        </a>
      </p>
      <p className="text-[16px] lg:text-[17px] xl:text-lg font-[300] text-off-white leading-[150%]">
        For more info, here&apos;s my{' '}
        <button
          className="text-white  underline decoration-primary underline-offset-8 ml-1 transition-all hover:tracking-wide"
          onClick={handleCvDownload}
        >
          resume
        </button>
      </p>
      <div className="mt-3 flex items-start justify-center gap-3 lg:gap-8">
        {SOCIALS.map((social, index) => (
          <SocialButton
            id={social.id}
            href={social.href}
            Icon={social.Icon}
            style={{
              animation: `fadeIn 0.8s ease-in-out forwards`,
              animationDelay: `${index * 0.2 + 0.65}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Information;