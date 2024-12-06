// components/ButtonLink.tsx
import React from 'react'

interface ButtonLinkProps {
  label: string
  link: string
  className?: string
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ label, link, className }) => {
  return (
    <a
      href={link}
      className={
        !className
          ? `w-[160px] h-[48px] border border-black rounded-full text-black hover:bg-black hover:text-white transition-all duration-200 flex justify-center items-center`
          : className
      }
    >
      {label}
    </a>
  )
}

export default ButtonLink
