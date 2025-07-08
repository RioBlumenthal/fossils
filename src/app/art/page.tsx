export default function Art() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Art</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for art pieces */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Art Piece 1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Untitled Series #1</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Mixed media on canvas, 2024
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Art Piece 2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Urban Reflections</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Acrylic on canvas, 2023
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Art Piece 3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Dreams</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Digital art, 2024
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Art Piece 4</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Abstract Emotions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Oil on canvas, 2023
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Art Piece 5</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Nature's Rhythm</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Watercolor on paper, 2024
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Art Piece 6</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Contemporary Visions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Mixed media installation, 2024
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 