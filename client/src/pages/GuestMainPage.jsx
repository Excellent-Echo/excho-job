import Pagination from "../components/Pagination";
import SearchJob from "../components/SearchJob";
import SearchJobLocation from "../components/SearchJobLocation";
import ExchoJobSlogan from "../components/ExchoJobSlogan";
import SearchJobType from "../components/SearchJobType";
import SearchJobCategory from "../components/SearchJobCategory";
import JobCard from "../components/JobCard";
import GuestHeader from "../components/GuestHeader";

export default function GuestMainPage() {
  return (
    <>
      <GuestHeader />
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          {/*slogan*/}
          <ExchoJobSlogan />
          {/*slogan*/}

          <div className="mt-5 mb-20 sm:mt-8 grid grid-cols-12 gap-6">
            {/*search job*/}
            <SearchJob />
            {/*search job*/}

            {/*search job location*/}
            <SearchJobLocation />
            {/*search job location*/}

            {/*search job type*/}
            <SearchJobType />
            {/*search job type*/}

            {/*search job category*/}
            <SearchJobCategory />
            {/*search job category*/}
          </div>
        </div>

        {/*pagination*/}
        <Pagination />
        {/*pagination*/}

        {/*job*/}
        <main className="grid grid-cols-12 gap-6 my-10">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </main>
        {/*job*/}

        {/*pagination*/}
        <Pagination />
        {/*pagination*/}
      </div>
    </>
  );
}