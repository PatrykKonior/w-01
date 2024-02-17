export default function Header() {
  return (
    <div className="bg-emerald-950 p-6 relative">
      <p className="text-1xl text-white font-bold absolute inset-y-3 right-11">
        <span className="text-neutral-300 font-light">
          Zalogowany użytkownik:
        </span>
        Operator
      </p>
      <button className="text-1xl absolute align-bottom top-1 right-0 h-7 w-7 m-1 focus:outline-none bg-white">
        &#9776;
      </button>
    </div>
  );
}
