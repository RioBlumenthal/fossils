export default function Writing() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Writing</h1>
        <div className="space-y-12">
          {/* Poetry Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Poetry</h2>
            <div className="space-y-8">
              <article className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Urban Solitude</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "In the heart of concrete dreams,<br/>
                  Where neon lights dance with shadows,<br/>
                  I find myself lost in the rhythm<br/>
                  Of a city that never sleeps..."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Published in Contemporary Voices, 2024</p>
              </article>
              
              <article className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">The Artist's Journey</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "With every brushstroke, a story unfolds,<br/>
                  Each color a chapter in the book of creation,<br/>
                  The canvas becomes a mirror<br/>
                  Reflecting the depths of human emotion..."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">From the collection "Creative Echoes", 2023</p>
              </article>
            </div>
          </section>
          
          {/* Essays Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Essays</h2>
            <div className="space-y-8">
              <article className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">The Intersection of Art and Technology</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  In this exploration of contemporary artistic practice, I examine how digital tools 
                  are reshaping traditional artistic boundaries while preserving the essential human 
                  element that makes art meaningful...
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Published in Art & Technology Quarterly, 2024</p>
              </article>
              
              <article className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Cultural Identity in Modern Art</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This essay explores how artists navigate questions of cultural identity in an 
                  increasingly globalized world, examining both personal and collective expressions 
                  of heritage and belonging...
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">From the anthology "Voices of Change", 2023</p>
              </article>
            </div>
          </section>
          
          {/* Creative Nonfiction Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Creative Nonfiction</h2>
            <div className="space-y-8">
              <article className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Memories of a Studio</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The studio has always been my sanctuary—a space where time seems to stand still 
                  and creativity flows freely. In this piece, I reflect on the evolution of my 
                  artistic practice and the lessons learned within these four walls...
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Personal essay, 2024</p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 