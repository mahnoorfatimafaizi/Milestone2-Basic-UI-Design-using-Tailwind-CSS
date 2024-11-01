"use client";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Soon = () => {
  const [isComingSoonOpen, setComingSoonOpen] = useState(false);

  const handleComingSoonClick = () => {
    setComingSoonOpen(true);
  };

  const closeCard = () => {
    setComingSoonOpen(false);
  };
  return (
    <section className="my-12 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 font-serif">
        Fresh from the Oven (Soon)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition transform duration-200">
          <Image
            src="/images/chunkcookies.jpg"
            alt="Double Chocolate Chunk Cookies"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />

          <h3 className="text-lg font-semibold mt-4 text-center hover:shadow-2xl hover:scale-105 transition transform duration-200">
            Double Chocolate Chunk Cookies
          </h3>
          <p className="text-center text-gray-600 mt-2">
            Rich, gooey, and packed with chunks of dark and milk chocolate for
            the ultimate indulgence.
          </p>

          <button
            onClick={handleComingSoonClick}
            className="bg-yellow-400 text-black font-semibold mt-4 py-2 px-6 rounded-full hover:bg-yellow-500 transition"
          >
            Coming Soon
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition transform duration-200">
          <Image
            src="/images/lemonzestcookies.jpg"
            alt="Lemon Zest Sugar Cookies"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold mt-4 text-center">
            Lemon Zest Sugar Cookies
          </h3>

          <p className="text-center text-gray-600 mt-2">
            A buttery, zesty treat with a refreshing burst of lemon flavor in
            every bite.
          </p>

          <button
            onClick={handleComingSoonClick}
            className="bg-yellow-400 text-black font-semibold mt-4 py-2 px-6 rounded-full hover:bg-yellow-500 transition"
          >
            Coming Soon
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition transform duration-200">
          <Image
            src="/images/oatmealcanberrydelight.jpg"
            alt="Oatmeal Cranberry Delights"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold mt-4 text-center">
            Oatmeal Cranberry Delights
          </h3>
          <p className="text-center text-gray-600 mt-2">
            Soft, chewy cookies blending hearty oats with the tart sweetness of
            dried cranberries.
          </p>

          <button
            onClick={handleComingSoonClick}
            className="bg-yellow-400 text-black font-semibold mt-4 py-2 px-6 rounded-full hover:bg-yellow-500 transition"
          >
            Coming Soon
          </button>
        </div>

        {isComingSoonOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle>Coming Soon!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  This recipe will be uploaded soon. Stay tuned! <br /> Thank
                  You
                </p>
                <button
                  onClick={closeCard}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  Close
                </button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Soon;
