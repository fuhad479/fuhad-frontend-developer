import banner_background from "../assets/banner-background.jpg";

export default function Banner() {
  return (
    <section
      className="z-0 text-white 2xl:h-[40.625rem] lg:h-screen !bg-[cover] !bg-no-repeat !bg-left relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] before:-z-[1]"
      style={{ background: `url('${banner_background}')` }}
    >
      <div className="container h-full px-4">
        <div className="h-full flex items-center">
          <div className="w-[60%]">
            <h1 className="text-5xl font-bold leading-[3.5625rem] mb-8">
              Welcome to the Gateway of Space with SpaceX
            </h1>
            <p className="text-lg mb-16">
              Experience the Future of Space Exploration with SpaceX. Discover
              groundbreaking technology, awe-inspiring missions, and a passion
              for pushing the boundaries of what’s possible. Join us on an
              extraordinary journey beyond Earth, where innovation meets the
              stars.
            </p>
            <div className="flex items-center gap-10">
              <button
                type="button"
                className="border rounded-full py-2 px-6 font-semibold flex items-center gap-3"
              >
                <span>Check our capsules</span>
              </button>
              <button className="flex items-center gap-3">
                <span>Learn more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
