export function Section({ title, children }) {
  return (
    <section className="flex flex-col items-start justify-center gap-4 p-4 text-center w-[80%] m-auto">
      <h1 className="text-xl font-bold border-b-2 border-white w-full text-left">{title}</h1>
      {children}
    </section>
  )
}