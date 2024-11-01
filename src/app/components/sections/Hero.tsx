import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative w-full flex justify-center">
      <div className="w-[1550px] h-[365px] relative">
        <Image
          src="/images/hero.png"
          alt="Delicious food spread"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center font-serif">
          Cookieen: Where Every Recipe is a Sweet Success!
        </h2>
      </div>
    </section>
  );
};

export default Hero;
