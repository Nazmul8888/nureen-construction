const Banner = () => {
  return (
    <div >

      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/k6CGY6q/nes6-spiz-211203.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Webcor Completes <br /> Headquarters Renovation</h1>
              <p className="mb-5">
              We build remarkable structures that bring exceptional value to our public and private clients while operating in a safe, quality-driven environment.
              </p>
              <button className="btn btn-accent wide">More Aviation Projects</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
