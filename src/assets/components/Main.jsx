import Show from "./Show";

const Main = (props) => {
  const data = props.data;
  return (
    <main className="container">
      {data.map((show, ind) => {
        return <Show showData={show} key={ind} />;
      })}
    </main>
  );
};

export default Main;
