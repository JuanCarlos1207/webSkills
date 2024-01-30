'use client'


import React, { useState } from 'react';

export default function CopyFunction({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
      })
      .catch(err => console.error('Error copying to clipboard: ', err));
  };

  return (
    <button className="border hover:text-white hover:bg-[#648de5] m-2 border-black border-solid h-[30px] w-[80px] mt-3 rounded-lg bg-white bord" onClick={copyToClipboard}>{copied ? 'Copied!' : 'Copy'}</button>
  );
}


