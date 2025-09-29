function MyButton() {
  return <button>I am a button</button>;
}

function MyApp() {
  return (
    <>
      <h1>Welcome to My App</h1>
      <MyButton />
    </>
  );
}
export default MyApp;

// ************** another function **********************

function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <p>
        this is the about <br /> page here it is. It is a simple page.
      </p>
    </>
  );
}

function MyApp() {
  return <AboutPage />;
}

export default MyApp;


