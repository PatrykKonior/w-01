export default function Dates() {
  return (
    <div className="w-dvw bg-slate-500 rounded-2xl overflow-auto relative flex p-5 m-4 inset-y-1 right-5">
      <div className="flex space-x-4 object-right">
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
