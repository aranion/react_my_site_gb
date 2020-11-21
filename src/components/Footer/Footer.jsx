import cls from './Footer.module.css'
const Footer = () => {
  return (
  <div className={cls.footer}>
	  Copyright &copy; {new Date().getFullYear()} Gavriley Evgenii
  </div>
  )
}

export default Footer;