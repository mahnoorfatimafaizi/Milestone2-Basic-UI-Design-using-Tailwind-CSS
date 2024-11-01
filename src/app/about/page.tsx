import React from "react";
import Hero from "../components/sections/Hero";

const Aboutpage = () => {
  return (
    <main>
      <Hero />
      <div className="max-w-3xl mx-auto p-6 sm:p-8 lg:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">About Cookieen</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to Cookieen, your go-to destination for the sweetest, most
          delicious cookie recipes online! Whether you are a beginner baker or a
          seasoned pro, our goal is to make cookie baking fun, easy, and
          accessible for everyone.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          At Cookieen, we believe that baking is not just about mixing
          ingredients; it’s about creating memories, sharing joy, and treating
          yourself and your loved ones to something special. Our collection of
          recipes is designed to inspire you to bake the perfect cookies for
          every occasion.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          With a variety of recipes, from classic chocolate chip to creative new
          flavors, our website has something for every taste. We take pride in
          using simple ingredients and step-by-step guides to ensure your baking
          success.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our mission is to spread the love of cookies around the world, one
          batch at a time. We are committed to providing high-quality content,
          tips, and tricks to help you achieve that perfect bite.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Thank you for joining us on this sweet journey! Let’s bake something
          wonderful together.
        </p>
      </div>
    </main>
  );
};

export default Aboutpage;
