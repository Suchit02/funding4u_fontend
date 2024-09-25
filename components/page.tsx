import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Page = ({ className = "" }) => {
  const router = useRouter();

  const [email, setEmail] = useState('theacetrader09@gmail.com');
  const [password, setPassword] = useState('Funding1972');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('tradingData');
      if (storedData) {
        router.push("/dashboard");
      }
    }
  }, []); // No dependencies, runs only once after mount


  const handleLogin = async (event: any) => {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await fetch('https://funding4userver-production.up.railway.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {

        localStorage.setItem("tradingData", JSON.stringify(data?.tradedata));
        return true;
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error('Error during API call:', err);
      setError('Error connecting to the server');
      setLoading(false);
      return false;
    }
    setLoading(false);
    return false;

  };

  const onSignInButtonClick = useCallback(async (e: any) => {
    // You can add validation or authentication logic here
    const redirect = await handleLogin(e);
    if (redirect) {
      router.push("/dashboard");
    }
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("./createaccount");
  }, [router]);

  return (
    <div
      className={`w-[28.063rem] shadow-[2px_2px_2px_#e1e1e1] rounded-xl bg-white flex flex-col items-start justify-start pt-[2.125rem] pb-[2.937rem] pl-[2rem] pr-[1.937rem] box-border gap-[1.125rem] max-w-full text-left text-[1.588rem] text-gray-100 font-inter mq525:pt-[1.375rem] mq525:pb-[1.938rem] mq525:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.037rem] font-poppins">
        <div className="overflow-hidden flex flex-row items-start justify-start pt-[0.037rem] px-[0.187rem] pb-[0.031rem] gap-[0.337rem] z-[1]">
          <img
            className="h-[1.806rem] w-[1.613rem] relative"
            loading="lazy"
            alt=""
            src="/group-48097043.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[0.343rem] px-[0rem] pb-[0rem]">
            <div className=" relative font-semibold inline-block shrink-0 mq450:text-[1.25rem]">
              Fundings4u
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.087rem] max-w-full text-[0.913rem]">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem] text-[1.388rem] text-black">
          <div className="relative tracking-[-0.01em] leading-[2.063rem] font-extrabold z-[1] mq450:text-[1.125rem] mq450:leading-[1.625rem]">
            Sign in to your account
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.581rem] box-border gap-[0.143rem] max-w-full">
          <div className="relative tracking-[-0.01em] leading-[1.375rem] font-medium inline-block min-w-[4.313rem] z-[1]">
            Your email
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0rem] box-border max-w-full text-[0.875rem] text-black">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-8xs bg-lavender-100 border-lightgray-200 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[0.875rem] px-[1.125rem] pb-[0.187rem] max-w-full z-[1]"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.143rem] box-border gap-[0.143rem] max-w-full">
          <div className="relative tracking-[-0.01em] leading-[1.375rem] font-medium inline-block min-w-[4.25rem] z-[1]">
            Password
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0rem] box-border max-w-full text-[0.875rem] text-black">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 rounded-8xs bg-lavender-100 border-lightgray-200 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[0.875rem] px-[1.312rem] pb-[0.187rem] max-w-full z-[1]"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0rem] box-border max-w-full text-[0.988rem] text-slategray">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[0.881rem] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                <div className="h-[1.063rem] w-[1rem] relative rounded-sm bg-whitesmoke-100 border-lightgray-100 border-[1px] border-solid box-border z-[1]" />
                {error !== "" && <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                  <div className="h-[0.625rem] text-red-500 relative tracking-[-0.01em] leading-[1.271rem] font-medium flex items-center min-w-[6rem] z-[1]">
                    {error}
                  </div>
                </div>}
                <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                  <div className="h-[0.625rem] relative tracking-[-0.01em] leading-[1.271rem] font-medium flex items-center min-w-[6rem] z-[1]">
                    Remember me
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] text-[0.888rem] text-gray-100">
                <div className="relative tracking-[-0.01em] leading-[1.313rem] font-medium inline-block min-w-[7.5rem] z-[1]">
                  Forgot password?
                </div>
              </div>
            </div>
            <div className="self-stretch h-[2.5rem] relative z-[1] text-white">
              <button
                disabled={loading}
                className={`absolute top-[0rem] font-bold text-2xl text-white left-[0rem] rounded-8xs ${loading ? "bg-gray-400" : "bg-blueviolet"}  w-full h-full cursor-pointer`}
                onClick={onSignInButtonClick}
              >
                {loading ? "Loading..." : "Sign in"}</button>

            </div>
            <div className="self-stretch h-[2.5rem] relative whitespace-nowrap text-gray-100">
              <div
                className="absolute top-[0rem] left-[0rem] rounded-8xs bg-gainsboro w-full h-full cursor-pointer z-[1]"
                onClick={onRectangleClick}
              />
              <div className="absolute top-[0.875rem] left-[8.375rem] tracking-[-0.01em] leading-[1.438rem] font-medium inline-block min-w-[7.25rem] z-[2]">
                Create Account
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[0rem] pr-[0.062rem] text-[0.881rem] text-slategray">
        <a className="[text-decoration:underline] relative tracking-[-0.01em] leading-[1.313rem] font-medium text-[inherit] inline-block min-w-[5.813rem] z-[1]">
          Privacy policy
        </a>
      </div>
    </div>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};

export default Page;
