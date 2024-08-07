import Heading from "../components/sections/heading/Heading";
import Specials from "../components/sections/heading/Specials";
import Testimonials from "../components/sections/heading/Testimonials";
import About from "../components/sections/heading/About";
export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}