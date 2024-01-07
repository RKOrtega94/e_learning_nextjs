"use client";

import { useRef, useState } from "react";
import { MdCancel } from "react-icons/md";

export function FileField() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState<File | null>(null);

  const handleClick = () => {
    if (file) {
      setFile(null);
    } else if (fileInputRef.current) {
      (fileInputRef.current as HTMLInputElement).click();
    }
  };

  const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
    setFile(event.target.files[0]);
  };

  return (
    <div
      className="w-full max-w-2xl p-4 flex flex-col items-center justify-center border border-gray-500 my-4 border-dotted rounded-md dark:border-gray-700 cursor-pointer"
      onClick={handleClick}
    >
      {file ? (
        <div className="w-full flex justify-between items-center">
          <span>{file.name}</span>
          <button>
            <MdCancel />
          </button>
        </div>
      ) : (
        <span>Click to select a file.</span>
      )}
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileSelected}
        accept="image/*"
      />
    </div>
  );
}
