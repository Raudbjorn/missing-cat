import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const TimelineEvent = ({ date, title, children }) => (
  <div className="mb-8">
    <div className="flex items-center">
      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
      <div className="ml-4">
        <div className="text-sm text-gray-500 font-sans">{date}</div>
        <div className="text-xl font-display font-bold">{title}</div>
      </div>
    </div>
    <div className="ml-8 mt-2 pl-4 border-l-2 border-blue-200 font-sans">
      {children}
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
   <header className="relative bg-gradient-to-br from-amber-500 to-orange-600 text-white py-24 overflow-hidden">
  <div className="absolute inset-0 opacity-10 flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 380"
      className="w-full h-auto max-w-md"
      fill="black"
    >
      <path
        d="M 151.34904,307.20455 L 264.34904,307.20455 C 264.34904,291.14096 263.2021,287.95455 236.59904,287.95455 C 240.84904,275.20455 258.12424,244.35808 267.72404,244.35808 C 276.21707,244.35808 286.34904,244.82592 286.34904,264.20455 C 286.34904,286.20455 323.37171,321.67547 332.34904,307.20455 C 345.72769,285.63897 309.34904,292.21514 309.34904,240.20455 C 309.34904,169.05135 350.87417,179.18071 350.87417,139.20455 C 350.87417,119.20455 345.34904,116.50374 345.34904,102.20455 C 345.34904,83.30695 361.99717,84.403577 358.75805,68.734879 C 356.52061,57.911656 354.76962,49.23199 353.46516,36.143889 C 352.53959,26.857305 352.24452,16.959398 342.59855,17.357382 C 331.26505,17.824992 326.96549,37.77419 309.34904,39.204549 C 291.76851,40.631991 276.77834,24.238028 269.97404,26.579549 C 263.22709,28.901334 265.34904,47.204549 269.34904,60.204549 C 275.63588,80.636771 289.34904,107.20455 264.34904,111.20455 C 239.34904,115.20455 196.34904,119.20455 165.34904,160.20455 C 134.34904,201.20455 135.49342,249.3212 123.34904,264.20455 C 82.590696,314.15529 40.823919,293.64625 40.823919,335.20455 C 40.823919,353.81019 72.349045,367.20455 77.349045,361.20455 C 82.349045,355.20455 34.863764,337.32587 87.995492,316.20455 C 133.38711,298.16014 137.43914,294.47663 151.34904,307.20455 z"
      />
    </svg>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Iggy is Home!</h1>
      <p className="text-xl max-w-2xl mx-auto text-amber-100">
        After nearly four months of searching, countless community efforts, and never losing hope, 
        our beloved cat has finally returned home safe and sound.
      </p>
      <div className="mt-8 flex space-x-4">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  </div>
</header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>The Happy Return</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <img 
                  src="/public/hesback.jpg" 
                  alt="Iggy reunited with his human" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-600 text-center italic mb-4">
                  The happy reunion: Iggy back home with his family
                </p>
              </div>
              <p className="text-lg mb-4">
                On October 23rd, 2021, after an incredible community effort spanning nearly four months, 
                Iggy was found safe and sound in a garage in Kópavogur. Though hungry and thirsty, he 
                was otherwise in perfect health. After a quick checkup at the vet, he returned home to 
                his overjoyed family.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6">The Journey</h2>
          
          <TimelineEvent date="June 27/28, 2021" title="Iggy Goes Missing">
            <p className="mb-4">Last seen around midnight at the corner of Vífilsgata and Gunnarsbraut, 
            near his home at Vifilsgata 15.</p>
          </TimelineEvent>

          <TimelineEvent date="Summer 2021" title="The Community Search">
            <p className="mb-4">A full community mobilization began, including:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Creation of missing.cat website with real-time updates</li>
              <li>Integration with social media platforms for broader reach</li>
              <li>Support from local community and cat organizations</li>
              <li>Regular neighborhood searches and poster distribution</li>
            </ul>
          </TimelineEvent>

          <TimelineEvent date="October 23, 2021" title="The Happy Return">
            <p>Found safe in a Kópavogur garage, hungry but healthy!</p>
          </TimelineEvent>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Original Missing Poster</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[800px] rounded-lg overflow-hidden shadow-lg">
                <object
                  data="/public/missing-poster.pdf"
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <p>Your browser does not support PDFs. You can 
                    <a href="/missing-poster.pdf" className="text-blue-600 hover:text-blue-800"> download the PDF </a> 
                    to view it.</p>
                </object>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="font-display">Special Thanks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose">
                <p className="mb-4">This happy ending would not have been possible without:</p>
                <ul className="list-disc ml-6">
                  <li className="mb-2">
                    <strong>Villikettir Organization</strong> - Their expertise and dedication in helping 
                    find lost cats was invaluable. Please support their work at{' '}
                    <a 
                      href="https://www.villikettir.is" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      villikettir.is
                    </a>
                  </li>
                  <li className="mb-2">
                    The wonderful communities of Reykjavík and Kópavogur who kept their eyes open
                  </li>
                  <li className="mb-2">
                    Everyone who shared Iggy's story and helped spread the word
                  </li>
                  <li className="mb-2">
                    The kind person who found him and made sure he got back home
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p>Created with ❤️ by Sveinbjörn & Amelia</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="https://www.villikettir.is" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100"
              >
                Support Villikettir
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;