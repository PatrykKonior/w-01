export default function Dates() {
  return (
    <div className="col-span-4 col-start-2 row-start-2 bg-slate-500">
      <div className="">
        <p className="text-1xl text-white font-bold">Gospodarka wodociągowa</p>
        <input
          type="date"
          id="start"
          name="search-date"
          value="2024-03-01"
          min="2000-01-01"
          max="2100-01-01"
        />
        <button>Data</button>
        <button>Miesiąc</button>
        <button>Rok</button>
      </div>
    </div>
  );
}
