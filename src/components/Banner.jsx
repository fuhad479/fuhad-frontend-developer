import banner_background from "../assets/banner-background.jpg";

export default function Banner() {
  return (
    <section
      data-testId="banner"
      className="z-0 text-white 2xl:h-[40.625rem] lg:h-screen !bg-cover !bg-no-repeat md:bg-left !bg-center relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] before:-z-[1]"
      style={{ background: `url('${banner_background}')` }}
    >
      <div className="container h-full px-4">
        <div className="h-full flex items-center">
          <div className="lg:w-[60%] lg:py-0 py-[150px]">
            <h1
              className="text-3xl md:text-5xl font-bold lg:leading-[3.5625rem] mb-8"
              data-testId="heading"
            >
              Welcome to the Gateway of Space with SpaceX
            </h1>
            <p className="md:text-lg mb-16">
              Experience the Future of Space Exploration with SpaceX. Discover
              groundbreaking technology, awe-inspiring missions, and a passion
              for pushing the boundaries of what’s possible. Join us on an
              extraordinary journey beyond Earth, where innovation meets the
              stars.
            </p>
            <div className="flex items-center gap-10">
              <button
                data-testId="button"
                type="button"
                className="border rounded-full py-2 px-6 font-semibold flex items-center gap-3"
              >
                <span>Check our capsules</span>
              </button>
              <button data-testId="button" className="flex items-center gap-3">
                <span>Learn more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
