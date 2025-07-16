import { Briefcase, HeartHandshake, Rocket } from "lucide-react";

export default function CultureBenifit() {
  return (
    <>
      <section className="w-full p-8 sm:px-16">
        <div className="max-w-6xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-center">
            Why Work With Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-4">
              <Rocket className="mx-auto text-green-500" size={40} />
              <h3 className="font-semibold text-xl">Fast Growth</h3>
              <p className="text-gray-600">
                Grow your career with hands-on work on exciting and real-world
                tech problems.
              </p>
            </div>
            <div className="text-center space-y-4">
              <HeartHandshake className="mx-auto text-green-500" size={40} />
              <h3 className="font-semibold text-xl">Positive Culture</h3>
              <p className="text-gray-600">
                A collaborative, remote-friendly work environment where everyone
                is respected.
              </p>
            </div>
            <div className="text-center space-y-4">
              <Briefcase className="mx-auto text-green-500" size={40} />
              <h3 className="font-semibold text-xl">Flexible Work</h3>
              <p className="text-gray-600">
                Work from anywhere with flexible hours that promote work-life
                balance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
