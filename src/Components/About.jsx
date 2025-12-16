import CompactCard from "./CompactCard";
import RotatingItem from "./RotatingItem";
import AboutDetail from "./About-Detail"


function About() {
  return (
    <>
    <div id="about">
      <RotatingItem/> {/* Desktop only */}
      <CompactCard/>
      <AboutDetail/>
    </div>
    </>
  );
}

export default About;