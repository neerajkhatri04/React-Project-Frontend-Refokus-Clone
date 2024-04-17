const Footer = () => {
  function handleHref(e) {
    e.preventDefault();
  }

  return (
    <div className="w-full mt-12 text-white font-['gilroy'] ">
      <div className="max-w-screen-xl mx-auto flex max-lg:flex-col">
        <h1 className="basis-1/2 font-['Grow_West'] text-[12vw] mt-6 max-lg:text-[9rem] max-lg:text-center">
          Unveil.
        </h1>
        <div className="basis-1/2 flex justify-between p-9 max-lg:p-4">
          <div>
            <h4 className="mb-10 text-zinc-500">Socials</h4>
            {[
              [
                "Linkidin",
                "https://www.linkedin.com/in/neeraj-khatri-61aa6a241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ],
              ["Twitter", "https://twitter.com/neerajkhatri_04"],
              [
                "Instagram",
                "https://www.instagram.com/neerajkhatri04?igsh=NHQ1YXd2YXdoejEw",
              ],
            ].map((item, i) => {
              return (
                <a key={i} className="block mb-2 text-zinc-600" href={item[1]}>
                  {item[0]}
                </a>
              );
            })}
          </div>
          <div>
            <h4 className="mb-10 text-zinc-500">Policies</h4>
            {["About", "Cookie Policy", "Privacy", "Terms"].map((item, i) => {
              return (
                <a
                  key={i}
                  className="block mb-2 text-zinc-600"
                  href="#"
                  onClick={handleHref}
                >
                  {item}
                </a>
              );
            })}
          </div>
          <div className="basis-1/2 flex flex-col justify-between items-end text-end">
            <h3 className="max-lg:text-sm">
              This website is a replica of Refokus, an online platform. Click
              the link below to visit the official website.
            </h3>
            <button className="w-36 h-12 text-lg font-normal border-white bg-violet-600">
              <a href="https://www.refokus.com/work"> Click Me!</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
