export default function DownloadAppBannerSection() {
  return (
    <section className="py-12 lg:py-[100px] bg-background-gradient lg:py-[100px] bg-cover download-bg">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex md:justify-around items-center my-4">
        <p className="mb-6 sm:mb-0 text-[28px] font-medium md:text-[42px] leading-tight">
          Download now to get started
        </p>
        <div className="flex">
          <a
            href="https://unicards.onelink.me/KRuW/"
            className="w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black google-btn-2"
          >
            <svg
              viewBox="0 0 16 16"
              focusable="false"
              className="chakra-icon css-xcmdz3"
            >
              <path
                d="M0.813438 0C0.793438 0.062 0.773438 0.123333 0.773438 0.205333V15.6913C0.773438 15.836 0.814104 15.918 0.896104 16L8.5061 7.938L0.813438 0ZM9.01944 8.472L10.9868 10.502L8.1781 12.102C8.1781 12.102 4.6081 14.1313 2.63944 15.2613L9.01944 8.472ZM9.55344 7.918L11.6641 10.1127C11.9948 9.92867 14.5781 8.45133 14.9468 8.246C15.3361 8.02067 15.2968 7.71267 14.9661 7.54867C14.6601 7.37867 12.0768 5.89867 11.6861 5.65867L9.55077 7.92L9.55344 7.918ZM9.0181 7.38467L11.0074 5.272L8.1681 3.65133C8.1681 3.65133 3.53944 1.00333 1.99944 0.119333L9.01944 7.38467H9.0181Z"
                fill="black"
              ></path>
            </svg>
            Google Play
          </a>
          <a
            href="https://uni-growth.onelink.me/v6cm/"
            className="w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black apple-btn-2"
          >
            App Store
          </a>
        </div>
      </div>
    </section>
  );
}
