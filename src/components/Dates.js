export default function Dates() {
  return (
    <div className="col-span-4 col-start-2 row-start-2 bg-slate-500 rounded-2xl overflow-auto relative flex p-5 m-1 -inset-y-80 right-2 h-14">
      <p className="text-1xl text-white font-bold absolute align-bottom top-4 ">
        Gospodarka wodociągowa
      </p>
      <div className="flex space-x-6 object-right absolute align-bottom top-3 right-5 rounded-md">
        <input
          type="date"
          id="start"
          name="search-date"
          value="2024-03-01"
          min="2000-01-01"
          max="2100-01-01"
          className="text-1xl h-8 w-32 rounded-r-lg focus:outline-none bg-teal-600 text-white"
        />
        <button className="text-1xl h-8 w-14 rounded-r-lg focus:outline-none bg-teal-800 text-white">
          Data
        </button>
        <button className="text-1xl h-8 w-20 rounded-b-lg focus:outline-none bg-teal-800 text-white">
          Miesiąc
        </button>
        <button className="text-1xl h-8 w-14 rounded-l-lg focus:outline-none bg-teal-800 text-white">
          Rok
        </button>
      </div>
    </div>
  );
}
