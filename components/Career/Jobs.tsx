export default function Jobs() {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full Time",
      location: "Remote",
      description:
        "Build modern and performant UIs using React and Tailwind CSS.",
    },
    {
      title: "Backend Developer",
      type: "Full Time",
      location: "Remote",
      description:
        "Work with Node.js, Express, and databases to build scalable APIs.",
    },
    {
      title: "UI/UX Designer",
      type: "Part Time",
      location: "Remote",
      description:
        "Design intuitive user interfaces and improve user experience.",
    },
  ];
  return (
    <>
      <section className="w-full p-8 sm:px-16">
        <div className="max-w-6xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-center">
            Current Openings
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {job.type} • {job.location}
                </p>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-500/75 transition cursor-pointer">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
