import Image from "next/image";
import Link from "next/link";

const Recipe = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto my-10">
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition transform duration-200">
          <Image
            src="/images/caramelappletart.jpg"
            alt="Caramel Apple Tart"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold mt-4 text-center">
            Caramel Apple Tart
          </h3>
          <p className="text-center text-gray-600 mt-2">
            A delightful tart with layers of caramelized apples and a buttery
            crust, topped with caramel drizzle.
          </p>

          <Link href="/caramelappletart">
            <button className="bg-yellow-400 text-black font-semibold mt-4 py-2 px-6 rounded-full hover:bg-yellow-500 transition">
              Recipe →
            </button>
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition transform duration-200">
          <Image
            src="/images/blueberrrymuffin.jpg"
            alt="Blueberry Muffin"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold mt-4 text-center">
            Blueberry Muffin
          </h3>
          <p className="text-center text-gray-600 mt-2">
            Fluffy and moist muffins bursting with fresh blueberries, perfect
            for a morning treat.
          </p>

          <Link href="/blueberrymuffin">
            <button className="bg-yellow-400 text-black font-semibold mt-4 py-2 px-6 rounded-full hover:bg-yellow-500 transition">
              Recipe →
            </button>
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition transform duration-200">
          <Image
            src="/images/pumkinpie.jpg"
            alt="Pumpkin Spice Pie"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold mt-4 text-center">
            Pumpkin Spice Pie
          </h3>
          <p className="text-center text-gray-600 mt-2">
            A classic pumpkin pie with a hint of spice, perfect for fall
            gatherings and celebrations.
          </p>

          <Link href="/pumpkinspicepie">
            <button className="bg-yellow-400 text-black font-semibold mt-4 py-2 px-6 rounded-full hover:bg-yellow-500 transition">
              Recipe →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Recipe;
