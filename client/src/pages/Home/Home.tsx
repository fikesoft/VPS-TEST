import mePhoto from "../../assets/img/me.png";
const Home = () => {
  return (
    <div>
      <div>
        <h1 className="h1">I'm a Software Engineer</h1>
        <p className="paragraph-small ">
          A frontend enginner aproaching the fullstack, functioning in the
          industry for 2 years now. I make meaningful bussines solution for
          small and medium bussineses.
        </p>
      </div>
      <div>
        <img src={mePhoto} alt="photo"></img>
      </div>
    </div>
  );
};

export default Home;
