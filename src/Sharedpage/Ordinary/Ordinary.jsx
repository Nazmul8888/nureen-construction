const Ordinary = () => {
  return (
    <div className=" py-10 max-w-screen-2xl mx-auto ">
      <div className=" flex justify-evenly">
        <div>
          <h1 className=" text-5xl font-bold">
            Extraordinary teams building <br /> inspiring projects.
          </h1>
          <br />
          <br />
          <p className=" text-2xl ">
            Bechtel helps customers deliver projects of purpose <br /> that create a
            lasting positive legacy.  These projects <br /> create jobs and grow
            economies; improve the resiliency <br /> of the world's 
            infrastructure; connect communities to resources <br /> and opportunity;
            get us closer to net  zero; tackle critical <br />environmental 
            challenges; protect people and the planet; <br /> and accelerate 
            progress to make the world a <br /> cleaner, greener, safer place.
          </p>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jHQGhaeRJsU?si=a2J2lJorvj1nLpHg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className=" py-20">
        <h1 className=" text-5xl font-sans  font-bold ml-28"> Since 1898</h1>
        <p className=" text-xl ml-28">Helping our customers create a better world</p>



        <div>
        <div className=" flex gap-5  ml-28 py-16 ">
          <div className="card w-96 bg-[#57727f] text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className=" text-6xl font-bold  text-red-600 mr-40">25k</h2>
              <span className=" text-4xl text-white mr-40">Projects</span>
              <span className=" text-4xl  ml-8 text-white mr-40">Completed</span>
            </div>
          </div>
        
        <div >
          <div className="card w-96 bg-[#57727f] text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className=" text-6xl font-bold  text-red-600  mr-40">160</h2>
              <span className=" text-4xl ml-8 text-white mr-40">Countries</span>
              <span className=" text-4xl   text-white mr-40">Visited</span>
            </div>
          </div>
        </div>
        <div >
          <div className="card w-96 bg-[#57727f] text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className=" text-6xl font-bold text-red-600  mr-40">7</h2>
              <span className=" text-4xl  ml-12 text-white mr-40">Continents</span>
              <span className=" text-4xl  ml-6 text-white mr-40">Explored</span>
            </div>
          </div>
        </div>
        </div>
        </div>



      </div>
    </div>
  );
};

export default Ordinary;
