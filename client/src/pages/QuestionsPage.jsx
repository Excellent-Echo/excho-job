import Header from "../components/Header";

export default function QuestionsPage() {
  return (
    <>
      <Header />

      <header className="bg-white shadow">
        <div className="mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-gray-900 text-3xl font-bold">Question</h1>
        </div>
      </header>

      <main>
        <div className="mx-auto py-6 max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {/*question*/}
            <div>
              <span>
                1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit, incidunt?
              </span>
              <div className="grid gap-4 grid-cols-2">
                <div className="flex items-center justify-center w-full h-16 bg-gray-300 rounded-lg">
                  1
                </div>
                <div className="flex items-center justify-center w-full h-16 bg-gray-300 rounded-lg">
                  2
                </div>
                <div className="flex items-center justify-center w-full h-16 bg-gray-300 rounded-lg">
                  3
                </div>
                <div className="flex items-center justify-center w-full h-16 bg-gray-300 rounded-lg">
                  4
                </div>
              </div>
            </div>
            <div>
              <span>
                1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit, incidunt?
              </span>
              <div className="grid gap-4 grid-cols-2">
                <div className="flex items-center justify-center w-full h-16 bg-gray-300 rounded-lg">
                  1
                </div>
                <div className="flex items-center justify-center w-full h-16 bg-gray-300 rounded-lg">
                  2
                </div>
                <div className="flex items-center justify-center w-full h-16 bg-gray-300 rounded-lg">
                  3
                </div>
                <div className="flex items-center justify-center w-full h-16 bg-gray-300 rounded-lg">
                  4
                </div>
              </div>
            </div>
            {/*question*/}
          </div>
        </div>
      </main>
    </>
  );
}