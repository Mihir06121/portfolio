import AnimatedPage from "./AnimatedPage";

const Page1 = () => {
  return (
    <AnimatedPage>
      <div className="container p-5 d-flex justify-content-center align-items-center">
        <div style={{backgroundColor: 'black'}} className="main-circle card rounded-circle">
          <h1 className="text-white p-5">Mihir</h1>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Page1;
