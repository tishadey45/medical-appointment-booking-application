import banner from "../assets/banner-img-1.png"

const Hero = () => {
  return <div>
     <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center bg-gray-100 rounded-2xl">
              <div className="max-w-md md:max-w-2xl lg:max-w-4xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Dependable Care, Backed by Trusted Professionals.
                </h1>
    
                <p className="py-6 text-sm md:text-lg lg:text-xl text-gray-600">
                  Our platform connects you with verified, experienced doctors
                  across various specialties — all at your convenience. Whether it's
                  a routine checkup or urgent consultation, book appointments in
                  minutes and receive quality care you can trust.
                </p>
                <div className="flex gap-4 items-center justify-center">
                  <label className="input rounded-4xl">
                    <svg
                      className="h-[1em] opacity-50 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </g>
                    </svg>
                    <input
                      type="search"
                      required
                      placeholder="Search any doctor..."
                    />
                  </label>
    
                  {/* <div className="join">
                  <input
                    className="input input-bordered join-item"
                    placeholder="Search"
                  />
                  <button className="btn join-item">Search</button>
                </div> */}
                  <button className="btn bg-blue-700 text-white rounded-4xl">
                    search now
                  </button>
                </div>
                <div className="flex gap-6 pt-4">
                  <figure>
                    <img className="rounded-2xl"
                      src={banner}
                      alt="Shoes"
                    />
                  </figure>
                  <figure>
                    <img className="rounded-2xl"
                      src={banner}
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
  </div>;
};

export default Hero;