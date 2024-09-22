function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center text-sm mt-6">
      <hr className="bg-black h-0.5 mx-1 md:mx-2 dark:bg-slate-400" />

      <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0 items-center font-semibold py-2.5 px-4 md:px-12">
        <span>Copyright © 2024. All Rights Reserved</span>

        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
          <div>Design by @XerHeartID</div>

          <div className="flex flex-row items-center justify-center gap-2">
            <a href="">
              <i className="bx bxl-github text-2xl md:text-3xl"></i>
            </a>
            <a href="">
              <i className="bx bxl-instagram text-2xl md:text-3xl"></i>
            </a>
            <a href="">
              <i className="bx bxl-discord-alt text-2xl md:text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
