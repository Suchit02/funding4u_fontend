import PropTypes from "prop-types";

const Nav = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-white border-whitesmoke-200 border-b-[2px] border-solid flex flex-row items-end justify-start pt-[0.562rem] px-[1.5rem] pb-[0.5rem] gap-[0.5rem] top-[0] z-[99] sticky text-left text-[1.588rem] text-gray-100 font-poppins ${className}`}
    >
      <img
        className="h-[2.5rem] w-[2.5rem] relative rounded-md"
        loading="lazy"
        alt=""
        src="/button.svg"
      />
      <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.281rem]">
        <div className="overflow-hidden flex flex-row items-start justify-start pt-[0.037rem] px-[0.187rem] pb-[0.031rem] gap-[0.337rem]">
          <img
            className="h-[1.806rem] w-[1.613rem] relative"
            loading="lazy"
            alt=""
            src="/group-48097043.svg"
          />
          <div className="flex flex-col items-start justify-start  px-[0rem] pb-[0rem]">
            <a className="[text-decoration:none]  relative font-semibold text-[inherit] inline-block shrink-0">
              Fundings4u
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};

export default Nav;
