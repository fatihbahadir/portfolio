"use client";
import { SOCIALS } from '@/data/data';
import { bebas_neue } from '@/lib/fonts';
import { handleCvDownload } from '@/lib/utils';


const Information = () => {
  return (
    <div className="flex items-start justify-center gap-2 lg:gap-5 flex-col">
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
          <a
            className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] text-primary opacity-0"
            href={social.href}
            key={social.id}
            target="_blank"
            style={{
              animation: `fadeIn 0.8s ease-in-out forwards`,
              animationDelay: `${index * 0.2 + 0.65}s`,
            }}
          >
            <social.Icon className="w-full h-full  transition-all hover:scale-105" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Information;