const page = () => {
  return (
    <section>
      <div className="max-w-3xl mx-auto p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <h5>For the Crust:</h5>
          <li>1 1/2 cups (190g) all-purpose flour</li>
          <li>1/2 cup (115g) unsalted butter, softened</li>
          <li>1/4 cup (30g) powdered sugar</li>
          <li>1/4 teaspoon salt</li>
          <h5>For the Filling:</h5>
          <li>1 cup (240ml) fresh lemon juice (about 4-5 lemons)</li>
          <li>1 cup (200g) granulated sugar</li>
          <li>3 large eggs</li>
          <li>1/2 cup (120ml) heavy cream</li>
          <li>Zest of 1 lemon</li>
          <li>Fresh strawberries, sliced (for topping)</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Preheat the oven to 350°F (175°C) and grease a tart pan.</li>
          <li>
            Mix flour, powdered sugar, butter, and salt to make the crust. Press
            into the tart pan, prick with a fork, and bake for 15-20 minutes
            until golden.
          </li>
          <li>
            In a bowl, whisk together lemon juice, sugar, eggs, heavy cream, and
            lemon zest until smooth.
          </li>
          <li>
            Pour the filling into the crust and bake for an additional 20-25
            minutes, or until the filling is set and slightly golden on top.
          </li>
          <li>
            Allow the tart to cool completely, then top with fresh strawberry
            slices before serving.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-2">
          <strong>Tips:</strong> Chill the crust before baking to prevent
          shrinking; for best flavor, use fresh, juicy strawberries as topping.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Storage:</strong> Cover and store in the refrigerator for up
          to 3 days.
        </p>
        <p className="text-gray-700">
          <strong>Serving:</strong> Garnish with mint leaves or serve with a
          dollop of whipped cream for added flavor.
        </p>
      </div>
    </section>
  );
};

export default page;
