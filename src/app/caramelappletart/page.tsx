const page = () => {
  return (
    <section>
      <div className="max-w-3xl mx-auto p-6 sm:p-8 lg:p-10 ">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <h5>For the Crust:</h5>
          <li>1 1/2 cups (190g) all-purpose flour</li>
          <li>1/2 cup (115g) unsalted butter, softened</li>
          <li>1/4 teaspoon salt</li>
          <h5>For the Filling:</h5>
          <li>3 large apples, thinly sliced</li>
          <li>1/2 cup (100g) granulated sugar</li>
          <li>1/4 cup (60ml) caramel sauce</li>
          <li>1 teaspoon cinnamon</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Preheat oven to 350°F (175°C).</li>
          <li>
            Prepare crust and press into a 9-inch tart pan, then bake for 15
            minutes.
          </li>
          <li>
            Layer apples in crust, sprinkle with sugar and cinnamon, and drizzle
            with caramel sauce.
          </li>
          <li>
            Bake for 30-35 minutes until apples are tender and caramelized.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-2">
          <strong>Tips:</strong> Use a mix of apple varieties for the best
          flavor.
        </p>
        <p className="text-gray-700">
          <strong>Storage:</strong> Store in the refrigerator for up to 2 days.
        </p>
      </div>
    </section>
  );
};

export default page;
