import Card from "./Card";

export default function CardSlice({ data }) {
  return (
    <div className="mx-auto ">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4 lg:gap-10">
        {data.map(card => (
          <div key={card.id}>
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  )
}