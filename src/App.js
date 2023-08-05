import Introvedio from './components/Introvedio'
import Section from './components/Section'
import { useEffect } from "react"
import "./styles/App.scss"
import "./styles/intro.scss"
import "./styles/section.scss"
import "./styles/footer.scss"
import "./styles/mediaQuery.scss"
import "./styles/misc.scss"
import freashimage from "./assests/academy.png"
import freashimage2 from "./assests/story.png"
import tedtalksimage from "./assests/in-the-news (1).gif"
import franchiseimg from "./assests/franchise.gif"
import mapimg from "./assests/locations.png"
import courseimg from "./assests/image2.png"
import albumbimg from "./assests/mba-cares.gif"
import baratimg from "./assests/image1.png"
import chaiwalaimg from "./assests/image3.png"

import data from "./data/data.json"
import Footer from './components/Footer'
import Misc from './components/Misc'
const yellow = "#fff100"
  , pink = "#ed1e79 "
  , white = "#fff"
  , brown = "6d3d0f";

function App() {
  const { freshTopic, freshTopic2, tedTalks, franchise, map, courses, album, barat, chaiwala } = data;


  useEffect(() => {
    const dotcursor = (e) => {
      const cursor = document.querySelector(".cursor", dotcursor)
      cursor.style.top = `${e.pageY - 14}px`;
      cursor.style.left = `${e.pageX - 14}px`;

      const element = e.target;
      if (element.getAttribute("data-cursorpointer")) {
        cursor.classList.add("cursorHover")
      }

      else if (element.getAttribute("data-cursorpointermini")) {
        cursor.classList.add("cursorHoverMini")
      }

      else {

        cursor.classList.remove("cursorHover")
        cursor.classList.remove("cursorhoverMini")

      }
    }

    window.addEventListener("mousemove", dotcursor)
    return () => {
      window.removeEventListener("mousemove", dotcursor)
    }
  }, [])


  return (
    <>
      <Introvedio />
      <Section h3={freshTopic.heading}
        text={freshTopic.text}
        btntext={freshTopic.btn}
        imgsrc={freashimage}
        backgroundcolor={pink}
        hedingcolor={yellow}
        textcolor={yellow}
        btnBgcolor={yellow}
        btncolor={pink}
      />

      <Section h3={freshTopic2.heading}
        text={freshTopic2.text}
        btntext={freshTopic2.btn}
        imgsrc={freashimage2}
        backgroundcolor={pink}
        hedingcolor={yellow}
        textcolor={yellow}
        btnBgcolor={yellow}
        btncolor={pink}
      />
      <Section h3={tedTalks.heading}
        text={tedTalks.text}
        btntext={tedTalks.btn}
        imgsrc={tedtalksimage}
        backgroundcolor={yellow}
        hedingcolor={pink}
        textcolor={pink}
        btnBgcolor={pink}
        btncolor={yellow}
      />
      <Section h3={franchise.heading}
        text={franchise.text}
        btntext={franchise.btn}
        imgsrc={franchiseimg}
        backgroundcolor={white}
        hedingcolor={pink}
        textcolor={brown}
        btnBgcolor={brown}
        btncolor={pink}
      />
      <Section h3={map.heading}
        text={map.text}
        imgsrc={mapimg}
        backgroundcolor={pink}
        hedingcolor={yellow}
        textcolor={yellow}
        btnBgcolor={pink}
        btncolor={yellow}
        hasbutton={false}
      />
      <Section h3={courses.heading}
        text={courses.text}
        btntext={courses.btn}
        imgsrc={courseimg}
        imgsize={"30%"}
        backgroundcolor={yellow}
        hedingcolor={pink}
        textcolor={pink}
        btnBgcolor={pink}
        btncolor={yellow}
      />
      <Section h3={album.heading}
        text={album.text}
        btntext={album.btn}
        imgsrc={albumbimg}
        backgroundcolor={white}
        hedingcolor={pink}
        textcolor={brown}
        btnBgcolor={brown}
        btncolor={yellow}
      />
      <Section h3={barat.heading}
        text={barat.text}
        btntext={barat.btn}
        imgsrc={baratimg}
        backgroundcolor={pink}
        hedingcolor={yellow}
        textcolor={yellow}
        btnBgcolor={yellow}
        btncolor={pink}
      />
      <Section h3={chaiwala.heading}
        text={chaiwala.text}
        btntext={chaiwala.btn}
        imgsrc={chaiwalaimg}
        backgroundcolor={white}
        hedingcolor={pink}
        textcolor={brown}
        btnBgcolor={brown}
        btncolor={yellow}
      />
      <Footer />
      <Misc />
    </>
  )
}

export default App


