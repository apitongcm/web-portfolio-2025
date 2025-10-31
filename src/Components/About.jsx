import CompactCard from "./CompactCard";
import RotatingItem from "./RotatingItem";


function About() {
  return (
    <>
    <div id="about">
      <RotatingItem/> {/* Desktop only */}
      <CompactCard/>
    </div>
    </>
  );
}

export default About;