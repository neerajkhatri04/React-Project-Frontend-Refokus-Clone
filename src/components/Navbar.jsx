import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-screen-xl m-auto font-extrabold py-4  border-b-2 border-zinc-700">
      <div className="left flex items-center">
        <h1 className="text-2xl select-none tracking-tight font-['Montserrat'] text-white max-lg:pl-1 max-lg:text-lg">
          Unveil
        </h1>
        {["Home", "Projects", "Contact", "", "Tech stack"].map((item) =>
          item.length == 0 ? (
            <span
              key={item}
              style={{ boxShadow: "0 0 15px #ffffff" }}
              className="ml-7 w-[2.5px] rounded-full h-8 bg-white"
            ></span>
          ) : (
            <div key={item} className="ml-16 max-lg:ml-8 max-lg:text-sm">
              <a
                className="flex items-center gap-1.5 font-extralight font-['gilroy'] text-white"
                href="#"
              >
                {item === "Projects" && (
                  <span
                    style={{ boxShadow: "0 0 15px #ffffff" }}
                    className="inline-block w-1.5 h-1.5 bg-cyan-300 rounded-full"
                  ></span>
                )}

                {item}
              </a>
            </div>
          )
        )}
      </div>

      <div className="max-lg:hidden">
        <Button text="Contact me" />
      </div>
    </nav>
  );
};

export default Navbar;
