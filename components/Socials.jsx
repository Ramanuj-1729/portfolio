import Link from "next/link"
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri"

const icons = [
  {
    path: 'https://github.com/Ramanuj-1729',
    name: <RiGithubFill />,
  },
  {
    path: 'www.linkedin.com/in/ramanujasati',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://twitter.com/AsatiRamanuj',
    name: <RiTwitterFill />,
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  )
}

export default Socials