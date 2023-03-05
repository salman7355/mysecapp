const Photo = () => {
  return (
    <div
      style={{
        backgroundImage: "cover",
        width: "50%",
      }}
    >
      <img
        src="https://picsum.photos/300/200"
        alt=""
        style={{
          float: "left",
          height: "100vh",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Photo;
