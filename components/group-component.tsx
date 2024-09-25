import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  const router = useRouter();

  const onCreateAccountBackgroundClick = useCallback(() => {
    router.push("/sign-in");
  }, [router]);

  return (
    <form
      className={`m-0 w-[28.063rem] shadow-[2px_2px_2px_#e1e1e1] rounded-xl bg-white flex flex-col items-start justify-start pt-[2.5rem] pb-[2.062rem] pl-[2.062rem] pr-[2rem] box-border gap-[2.012rem] max-w-full mq450:gap-[1rem] mq700:pt-[1.625rem] mq700:pb-[1.313rem] mq700:box-border ${className}`}
    >
      <div className="w-[28.063rem] h-[44.438rem] relative shadow-[2px_2px_2px_#e1e1e1] rounded-xl bg-white hidden max-w-full" />
      <div className="overflow-hidden flex flex-row items-start justify-start pt-[0.037rem] px-[0.187rem] pb-[0.218rem] gap-[0.337rem] z-[1]">
        <img
          className="h-[1.806rem] w-[1.613rem] relative"
          loading="lazy"
          alt=""
          src="/group-48097043.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[0.343rem] px-[0rem] pb-[0rem]">
          <div className="h-[1.113rem] relative text-[1.588rem] font-semibold font-poppins text-gray-100 text-left inline-block shrink-0 mq450:text-[1.25rem]">
            Fundings4u
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.65rem]">
        <a className="[text-decoration:none] relative text-[1.388rem] tracking-[-0.01em] leading-[2.063rem] font-extrabold font-inter text-black text-left z-[1] mq450:text-[1.125rem] mq450:leading-[1.625rem]">
          Create an account
        </a>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.143rem]">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1rem]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[2.062rem] min-w-[7.5rem]">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.125rem] pr-[0rem]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem] mq450:flex-1">
                  <a className="[text-decoration:none] relative text-[0.913rem] tracking-[-0.01em] leading-[1.375rem] font-medium font-inter text-gray-100 text-left inline-block min-w-[5.125rem] z-[1]">
                    First Name*
                  </a>
                  <div className="self-stretch rounded-8xs bg-lavender-100 border-lightgray-200 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start pt-[0.875rem] px-[1.312rem] pb-[0.187rem] z-[1]">
                    <div className="relative text-[0.875rem] tracking-[-0.01em] leading-[1.313rem] font-medium font-inter text-black text-left inline-block min-w-[5.813rem]">
                      *************
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-[0.913rem] tracking-[-0.01em] leading-[1.375rem] font-medium font-inter text-gray-100 text-left inline-block min-w-[4.313rem] z-[1]">
                Your emai
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem] min-w-[7.438rem]">
              <a className="[text-decoration:none] relative text-[0.913rem] tracking-[-0.01em] leading-[1.375rem] font-medium font-inter text-gray-100 text-left inline-block min-w-[5.063rem] z-[1]">
                Last Name*
              </a>
              <div className="self-stretch rounded-8xs bg-lavender-100 border-lightgray-200 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start pt-[0.875rem] px-[1.312rem] pb-[0.187rem] z-[1]">
                <div className="relative text-[0.875rem] tracking-[-0.01em] leading-[1.313rem] font-medium font-inter text-black text-left inline-block min-w-[5.813rem]">
                  *************
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-8xs bg-lavender-100 border-lightgray-200 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start pt-[0.875rem] px-[1.125rem] pb-[0.187rem] z-[1]">
            <div className="relative text-[0.875rem] tracking-[-0.01em] leading-[1.313rem] font-medium font-inter text-black text-left whitespace-nowrap">
              theacetrader09@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.143rem]">
        <div className="relative text-[0.913rem] tracking-[-0.01em] leading-[1.375rem] font-medium font-inter text-gray-100 text-left inline-block min-w-[4.688rem] z-[1]">
          Password*
        </div>
        <div className="self-stretch rounded-8xs bg-lavender-100 border-lightgray-200 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start pt-[0.875rem] px-[1.312rem] pb-[0.187rem] z-[1]">
          <div className="relative text-[0.875rem] tracking-[-0.01em] leading-[1.313rem] font-medium font-inter text-black text-left inline-block min-w-[5.813rem]">
            *************
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.143rem]">
        <div className="relative text-[0.913rem] tracking-[-0.01em] leading-[1.375rem] font-medium font-inter text-gray-100 text-left z-[1]">
          Confirm Password*
        </div>
        <div className="self-stretch rounded-8xs bg-lavender-100 border-lightgray-200 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start pt-[0.875rem] px-[1.312rem] pb-[0.187rem] z-[1]">
          <div className="relative text-[0.875rem] tracking-[-0.01em] leading-[1.313rem] font-medium font-inter text-black text-left inline-block min-w-[5.813rem]">
            *************
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.875rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0.687rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[0.687rem] max-w-full">
            <div className="h-[1.063rem] w-[1.063rem] relative rounded-sm bg-whitesmoke-100 border-lightgray-100 border-[1px] border-solid box-border z-[1]" />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border min-w-[14rem] max-w-full">
              <div className="self-stretch h-[3.188rem] relative text-[0.875rem] tracking-[-0.01em] leading-[1.271rem] text-slategray text-left flex items-center z-[1]">
                <span>
                  <span className="font-medium font-inter">{`I certify that I am 18 years of age or older, agree to the `}</span>
                  <b className="[text-decoration:underline] font-inter">
                    User Agreement
                  </b>
                  <span className="font-medium font-inter">{`, and acknowledge the `}</span>
                  <b className="[text-decoration:underline] font-inter">
                    Privacy policy.
                  </b>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[2.5rem] relative z-[1]">
          <div
            className="absolute top-[0rem] left-[0rem] rounded-8xs bg-blueviolet w-full h-full cursor-pointer"
            onClick={onCreateAccountBackgroundClick}
          />
          <div className="absolute top-[0.875rem] left-[8.5rem] text-[0.938rem] tracking-[-0.01em] leading-[1.426rem] font-medium font-inter text-white text-left flex items-center min-w-[6.938rem] z-[1]">
            Create Account
          </div>
        </div>
        <div onClick={() => router.push("/sign-in")} className="flex cursor-pointer flex-row items-start justify-start py-[0rem] px-[4.187rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <div className="relative text-[0.875rem] [text-decoration:underline] tracking-[-0.01em] leading-[1.063rem] text-slategray text-left z-[1]">
            <span className="font-medium font-inter">{`Already have an account? `}</span>
            <b className="font-inter">Login Here</b>
          </div>
        </div>
      </div>
    </form>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
