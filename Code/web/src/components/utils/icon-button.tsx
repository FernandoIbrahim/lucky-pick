'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

interface IconButtonProps {
  content: string;
  mainUrl?: string;
  title: string;
}

export default function ({ content, mainUrl, title }: IconButtonProps) {

    const [isHovering, setIsHovering] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const isMainURL = mainUrl === pathname;

    const handleClick = () => {
      if (!mainUrl) return;

      if (mainUrl.startsWith('http')) {
        window.open(mainUrl, '_blank');
      } else {
        router.push(mainUrl);
      }
    };

    return (

        <div className="relative inline-block group ">
            
            <button
                  onClick={handleClick}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className={`flex flex-col items-center justify-center cursor-pointer w-20 h-15 p-1 rounded-sm font-inter transition ${
                    isMainURL ? 'bg-stone-200' : ''
                  }`}
                >
                  <div className="flex-grow flex items-center justify-center text-black">
                    <div className="flex items-center justify-center w-7 h-7">
                      <svg className="w-full h-full text-black" fill="currentColor">
                        <use href={`/icons/icons.svg#${content}`} />
                      </svg>
                    </div>
                  </div>
              
                  <p className=" w-12 h-4 text-center text-xs font-semibold text-black pointer-events-none">
                    {title}
                  </p>
            </button>
            
        </div>

    );
}