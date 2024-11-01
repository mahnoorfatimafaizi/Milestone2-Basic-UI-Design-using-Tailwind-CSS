const page = () => {
  return (
    <section>
      <div className="max-w-3xl mx-auto p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <h5>For the Crust:</h5>
          <li>1 1/2 cups (190g) all-purpose flour</li>
          <li>1/2 cup (115g) unsalted butter, chilled</li>
          <li>1/4 teaspoon salt</li>
          <h5>For the Filling:</h5>
          <li>1 can (15 oz) pumpkin puree</li>
          <li>1 cup (240ml) heavy cream</li>
          <li>1/2 cup (100g) brown sugar</li>
          <li>2 large eggs</li>
          <li>1 teaspoon ground cinnamon</li>
          <li>1/2 teaspoon ground nutmeg</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Preheat oven to 375°F (190°C).</li>
          <li>Prepare and press crust into a 9-inch pie pan. Set aside.</li>
          <li>
            Mix pumpkin puree, cream, brown sugar, eggs, cinnamon, and nutmeg
            until smooth.
          </li>
          <li>Pour filling into crust and bake for 45-50 minutes until set.</li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-2">
          <strong>Tips:</strong> Use fresh pumpkin puree for richer flavor.
        </p>
        <p className="text-gray-700">
          <strong>Storage:</strong> Refrigerate for up to 4 days.
        </p>
      </div>
    </section>
  );
};

export default page;
