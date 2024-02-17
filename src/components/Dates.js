export default function Dates() {
  return (
    <div>
      <p>Gospodarka wodociągowa</p>
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
  );
}
