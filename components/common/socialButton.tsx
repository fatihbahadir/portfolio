import { IconType } from "react-icons/lib";

const SocialButton = ({ id, href, Icon, style} : { id: number, href: string, Icon: IconType, style?: {} }) => {
  return (
    <a
    className={`w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] text-primary ${style && 'opacity-0'} `}
    href={href}
    key={id}
    target="_blank"
    style={style}
  >
    <Icon className="w-full h-full  transition-all hover:scale-105" />
  </a>
  )
}

export default SocialButton