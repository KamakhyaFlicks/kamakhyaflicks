import visionImage from '../../assets/images/filmingVision.png'; // Replace with your image

const OurVision = () => {
  return (
    <section className="w-full  bg-[#121212] flex justify-center items-center m-auto py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 ">
        {/* Image */}
        <div className="w-[20rem] md:w-1/2">
          <img
            src={visionImage}
            alt="Filming Vision"
            className="w-[20rem]  rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Quote box */}
        <div className="w-full md:w-1/2">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 text-white shadow-lg transition-all">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-base sm:text-lg leading-relaxed italic">
              "We don’t just tell stories — we create experiences, capturing the soul behind every frame."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
