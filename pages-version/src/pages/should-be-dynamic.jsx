export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/");
  const { time } = await res.json();

  return {
    props: {
      time,
    },
  };
}

export default function ShouldBeDynamic({ time }) {
  return (
    <div className="mx-auto max-w-6xl text-3xl">Time Service Time: {time}</div>
  );
}
