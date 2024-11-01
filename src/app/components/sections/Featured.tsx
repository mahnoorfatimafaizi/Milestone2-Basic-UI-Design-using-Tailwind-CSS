import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <section className="my-12 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 font-serif">
        Tasty Treats of the Day!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition transform duration-200">
          <Image
            src="/images/dizzle-brownies.jpg"
            alt="Chocolate Dizzle Brownies"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />

          <h3 className="text-lg font-semibold mt-4 text-center hover:shadow-2xl hover:scale-105 transition transform duration-200">
            Chocolate Drizzle Brownies
          </h3>
          <p className="text-center text-gray-600 mt-2">
            Decadent fudgy brownies topped with rich chocolate drizzle.
          </p>
          <Link href="/chocolatedizzlebrownies">
            <button className="bg-yellow-400 text-black font-semibold mt-4 py-2 px-6 rounded-full hover:bg-yellow-500 transition">
              Recipe →
            </button>
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition transform duration-200">
          <Image
            src="/images/strawbwerrylemontarts.jpg"
            alt="Strawberry Lemon Tart"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold mt-4 text-center">
            Strawberry Lemon Tart
          </h3>

          <p className="text-center text-gray-600 mt-2">
            A tangy lemon tart topped with fresh, juicy strawberries for a
            refreshing bite.
          </p>

          <Link href="/strawberrylemontart">
            <button className="bg-yellow-400 text-black font-semibold mt-4 py-2 px-6 rounded-full hover:bg-yellow-500 transition">
              Recipe →
            </button>
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition transform duration-200">
          <Image
            src="/images/cinnamonsugarbites.jpg"
            alt="Cinnamon Sugar Bites"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold mt-4 text-center">
            Cinnamon Sugar Bites
          </h3>
          <p className="text-center text-gray-600 mt-2">
            Crispy, golden bites dusted with cinnamon sugar, perfect for a sweet
            snack.
          </p>

          <Link href="/cinnamonsugarbites">
            <button className="bg-yellow-400 text-black font-semibold mt-4 py-2 px-6 rounded-full hover:bg-yellow-500 transition">
              Recipe →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
