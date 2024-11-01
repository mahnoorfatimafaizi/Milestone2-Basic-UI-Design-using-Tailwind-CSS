const page = () => {
  return (
    <section>
      <div className="max-w-3xl mx-auto p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <h5>For the Dough:</h5>
          <li>2 cups (250g) all-purpose flour</li>
          <li>1/2 cup (113g) unsalted butter, softened</li>
          <li>1/4 cup (60ml) milk</li>
          <li>1/4 cup (50g) granulated sugar</li>
          <li>1/2 teaspoon salt</li>
          <h5>For the Topping:</h5>
          <li>1/4 cup (50g) granulated sugar</li>
          <li>1 tablespoon ground cinnamon</li>
          <li>2 tablespoons melted butter</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Preheat oven to 350°F (175°C) and line a baking sheet with parchment
            paper.
          </li>
          <li>
            Mix flour, butter, milk, sugar, and salt to form dough. Roll into
            small balls.
          </li>
          <li>
            Brush each ball with melted butter, then roll in cinnamon-sugar
            mixture.
          </li>
          <li>Bake for 10-12 minutes or until golden and crispy.</li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-2">
          <strong>Tips:</strong> For extra crunch, double coat with
          cinnamon-sugar.
        </p>
        <p className="text-gray-700">
          <strong>Storage:</strong> Store in an airtight container at room
          temperature for up to 3 days.
        </p>
      </div>
    </section>
  );
};

export default page;
