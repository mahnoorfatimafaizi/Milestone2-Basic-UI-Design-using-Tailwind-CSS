const page = () => {
  return (
    <section>
      <div className="max-w-3xl mx-auto p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <h5>For the Muffin Batter:</h5>
          <li>2 cups (250g) all-purpose flour</li>
          <li>1/2 cup (100g) granulated sugar</li>
          <li>1/2 cup (120ml) milk</li>
          <li>1/2 cup (115g) unsalted butter, melted</li>
          <li>1 large egg</li>
          <li>1 teaspoon vanilla extract</li>
          <li>1 cup (150g) blueberries</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Preheat oven to 375°F (190°C) and line a muffin pan with paper
            liners.
          </li>
          <li>
            In a bowl, combine flour, sugar, milk, butter, egg, and vanilla
            until smooth.
          </li>
          <li>
            Gently fold in blueberries and fill muffin liners about 3/4 full.
          </li>
          <li>
            Bake for 18-20 minutes or until tops are golden and a toothpick
            comes out clean.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-2">
          <strong>Tips:</strong> Dust blueberries with flour to prevent sinking.
        </p>
        <p className="text-gray-700">
          <strong>Storage:</strong> Store at room temperature for up to 3 days
          or freeze for up to a month.
        </p>
      </div>
    </section>
  );
};

export default page;
