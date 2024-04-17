import Card from "./Card";

const text = ["Insights and behind the Schene", "Let's get to it, together."];

const Cards = () => {
  return (
    <div className="flex justify-between max-w-screen-xl mx-auto max-lg:inline-block max-lg:p-3">
      <Card width="w-[35%]" heading={false} para={true} text={text[0]} />
      <Card
        width="w-[64.8%]"
        heading={true}
        para={false}
        text={text[1]}
        hover={1}
      />
    </div>
  );
};

export default Cards;
