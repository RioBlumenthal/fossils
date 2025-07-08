import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] w-full relative">
      {/* Contact Sidebar - Absolute positioned */}
      <div className="lg:absolute lg:left-0 lg:top-0 lg:w-2/5 lg:pl-6 lg:pt-6 lg:pb-6">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 lg:sticky lg:top-24 max-w-xs">
          <h2 className="text-xl font-semibold mb-5">Contact</h2>
          <div className="space-y-5">
            <div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2">For Questions About:</h3>
              <ul className="text-base text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Posters</li>
                <li>• Greeting cards</li>
                <li>• Postcards from his paintings</li>
                <li>• Purchasing originals</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2">Address</h3>
              <div className="space-y-1 text-base text-gray-600 dark:text-gray-300">
                <p className="font-medium">David Martinez</p>
                <p>5201 Avenue H</p>
                <p>Austin, TX 78751</p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2">Contact</h3>
              <div className="space-y-2 text-base text-gray-600 dark:text-gray-300">
                <p>
                  <a 
                    href="tel:+15124190004" 
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    (512) 419-0004
                  </a>
                </p>
                <p>
                  <a 
                    href="mailto:art@davidbmartinez.com" 
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    art@davidbmartinez.com
                  </a>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2">Follow</h3>
              <a 
                href="https://instagram.com/elgatochatoloco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @elgatochatoloco
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
