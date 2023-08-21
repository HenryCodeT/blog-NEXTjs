import React, { ReactNode } from 'react'

interface ChildComponentProps {
  className: string;
  children: ReactNode;
}

export const Footer: React.FC<ChildComponentProps> = ({ className, children }) => {
  const combinedClassName = `p-15 bg-gray-100 ${className}`
  return (
    <div className={combinedClassName} >{children}</div>
  )
}
export default Footer;