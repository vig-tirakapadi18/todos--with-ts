import { type ReactNode, type FC } from "react";

interface HeaderProps {
  image: { src: string; alt: string };
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <div className="text-center">
      {children}
      <img
        src={image.src}
        alt={image.alt}
        className="w-20 h-20 bg-stone-600 mx-auto my-4 border-2 border-emerald-600 p-2 rounded-full"
      />
    </div>
  );
};

export default Header;
