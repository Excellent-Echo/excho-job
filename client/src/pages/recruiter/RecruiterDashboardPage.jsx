import Header from "../../components/Header";

const people = [
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function RecruiterDashboardPage() {
  return (
    <>
      <Header />

      <header className="bg-white shadow">
        <div className="mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-gray-900 text-3xl font-bold">Job Seekers List</h1>
        </div>
      </header>

      <main>
        <div className="mx-auto py-6 max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block align-middle py-2 min-w-full sm:px-6 lg:px-8">
                  <div className="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-gray-200 divide-y">
                      <tbody className="bg-white divide-gray-200 divide-y">
                        {people.map((person) => (
                          <tr key={person.email}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <img
                                className="w-10 h-10 rounded-full"
                                src={person.image}
                                alt=""
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-gray-900 text-sm font-medium">
                                {person.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-gray-500 text-sm">
                                {person.email}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm font-medium">
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                See details
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}