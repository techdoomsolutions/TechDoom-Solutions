export default function CallToAction() {
  return (
    <>
      <section className="w-full p-8 sm:px-16">
        <div className="max-w-6xl mx-auto space-y-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Didn’t find a role that fits?
          </h2>
          <p className="text-gray-600 mb-6">
            We’re always looking for talented people. Send your resume to{" "}
            <span className="text-green-500 font-medium">
              careers@techdoom.com
            </span>
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-500/75 transition cursor-pointer">
            Send Resume
          </button>
        </div>
      </section>
    </>
  );
}
