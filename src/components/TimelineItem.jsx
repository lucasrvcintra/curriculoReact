export function TimelineItem({ date, title, items }) {
  return (
      <div className="flex flex-row items-start justify-evenly gap-4 p-4 text-center w-[80%] m-auto">
        <div className="pt-0.5">{date}</div>
          <div className="flex flex-col items-start justify-center gap-4 pt-0 text-center m-auto">
            {title && <h2 className="text-lg font-bold">{title}</h2>}
            {items && items.length > 0 && (
              <ul className="grid grid-cols-2 gap-x-10 list-disc ml-4 text-left">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
             )}
        </div>
      </div>
  )
}