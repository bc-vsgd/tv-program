const Show = (props) => {
  const { time, image, title, type, duration, isUnseen, direct } =
    props.showData;
  return (
    <section>
      <div class="sec-div-1">{time}</div>
      <div class="sec-div-2">
        <img src={image} alt="Show image" />
      </div>
      <div class="sec-div-3">
        <p>{title}</p>
        <p>{type}</p>
        <p>
          <span>{duration}</span>
          {isUnseen && (
            <span>
              <i class="fa-solid fa-circle"></i>Inédit
            </span>
          )}
          {direct && (
            <span>
              <i class="fa-solid fa-circle"></i>Direct
            </span>
          )}
        </p>
      </div>
    </section>
  );
};

export default Show;
