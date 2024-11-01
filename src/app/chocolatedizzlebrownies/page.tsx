const ChocolateDizzleBrownies = () => {
  return (
    <section>
      <div className="max-w-3xl mx-auto p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>1/2 cup (115g) unsalted butter</li>
          <li>1 cup (200g) granulated sugar</li>
          <li>2 large eggs</li>
          <li>1 teaspoon vanilla extract</li>
          <li>1/3 cup (40g) unsweetened cocoa powder</li>
          <li>1/2 cup (65g) all-purpose flour</li>
          <li>1/4 teaspoon salt</li>
          <li>1/4 teaspoon baking powder</li>
          <li>1/2 cup (90g) chocolate chips (for drizzling)</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Preheat the oven to 350°F (175°C) and grease a 9x9-inch baking pan.
          </li>
          <li>
            Melt the butter in a medium saucepan over low heat. Remove from heat
            and stir in the sugar, eggs, and vanilla.
          </li>
          <li>
            Whisk together cocoa powder, flour, salt, and baking powder in
            another bowl. Gradually add to the wet mixture, stirring until just
            combined.
          </li>
          <li>Fold in chocolate chips, reserving a few for drizzling.</li>
          <li>
            Pour the batter into the prepared pan and bake for 20-25 minutes or
            until a toothpick comes out clean.
          </li>
          <li>
            Melt reserved chocolate chips and drizzle over warm brownies. Let
            cool before cutting into squares.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-2">
          <strong>Tips:</strong> Avoid overbaking for fudginess; add nuts for
          texture.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Storage:</strong> Store in an airtight container for 3 days at
          room temperature or up to a week in the fridge.
        </p>
        <p className="text-gray-700">
          <strong>Serving:</strong> Serve warm with vanilla ice cream or whipped
          cream.
        </p>
      </div>
    </section>
  );
};

export default ChocolateDizzleBrownies;
