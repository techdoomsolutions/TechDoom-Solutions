export default function Hero() {
  return (
    <>
      <section className="w-full min-h-[70vh] p-6 lg:px-12 flex justify-center items-center">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-green-500">
            Join TechDoom Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {` We’re shaping the future of technology. Be part of a fast-moving
            team, where your ideas matter and your impact is real.`}
          </p>
        </div>
      </section>
    </>
  );
}
