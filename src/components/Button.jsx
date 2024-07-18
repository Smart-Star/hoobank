export const Button = ({ margin, background }) => (
  <button
    type="button"
    className={`py-4 px-6 bg-blue-gradient ${margin} outline-none
    ${background ? `${background}` : `group hover:button-bg`}
    hover:ring-2 hover:ring-secondary/70 rounded-sm group transition-all duration-300
    `}
  >
    <span className="font-poppins font-medium text-[18px] text-primary group-hover:text-gradient transition-all duration-300">
      Get Started
    </span>
  </button>
);
