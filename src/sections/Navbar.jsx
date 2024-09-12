import React from "react";

const Navbar = () => {
  return (
    <header>
      <div>
        <div>
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Albin
          </a>
          <button>
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
