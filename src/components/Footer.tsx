import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/sign-up" || pathname === "/login") {
    return null;
  }
  return <div>Footer</div>;
};

export default Footer;
