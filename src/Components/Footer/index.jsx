const Footer = () => {
  return (
    <footer className="py-6 md:py-8">
      <div className="container mx-auto">
        <p className="text-center text-xs text-[#acabab] lg:text-sm">
          Copyright ©{new Date().getFullYear()} | All rights reserved by
          ProgHive with Jahid Munshi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
