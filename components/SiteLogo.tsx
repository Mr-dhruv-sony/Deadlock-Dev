'use client';

import Image from 'next/image';
import { useState } from 'react';

export function SiteLogo() {
  const [imageVisible, setImageVisible] = useState(true);

  return (
    <div className="brandVisual">
      {imageVisible ? (
        <div className="logoFrame">
          <Image
            src="/deadlock-devs-logo.png"
            alt="Deadlock Devs collective emblem"
            width={112}
            height={112}
            className="logoImage"
            priority
            onError={() => setImageVisible(false)}
          />
        </div>
      ) : null}
      <span className="brandMark brandFallback" aria-hidden="true">
        DD
      </span>
    </div>
  );
}
