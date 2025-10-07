"use client";

import Image from "next/image";

interface InstructionStepProps {
  texto: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  openModal?: (src: string) => void;
}

export function InstructionStep({
  texto,
  src,
  alt,
  width = 500,
  height = 500,
  openModal,
}: InstructionStepProps) {
  return (
    <div className="mb-6">
      {texto && <p className="mb-6 text-xl">{texto}</p>}
      {src && (
        <Image
          src={src}
          alt={alt || ""}
          width={width}
          height={height}
          className="mb-5 cursor-pointer"
          onClick={() => openModal && openModal(src)}
        />
      )}
    </div>
  );
}
