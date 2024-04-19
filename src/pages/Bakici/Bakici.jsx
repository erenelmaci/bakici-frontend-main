import React, { useState } from "react"
import "../../styles/Bakici.css"
import BakiciHome from "./BakiciHome"
import BakiciYorumlar from "./BakiciYorumlar"
import NavbarBakici from "../../components/NavbarBakici"
import Footer from "../../components/Footer"
import BakiciProfile from "./BakiciProfile"
import BakiciTakvim from "./BakiciTakvim"
import BakiciMesajlar from "./BakiciMesajlar/BakiciMesajlar"

const secondNavLinks = [
  {
    id: 1,
    title: "ANASAYFA",
    Component: () => <BakiciHome />,
  },
  {
    id: 2,
    title: "MESAJLAR",
    Component: () => <BakiciMesajlar />,
  },
  {
    id: 3,
    title: "TAKVİM",
    Component: () => <BakiciTakvim />,
  },
  {
    id: 4,
    title: "PROFİL",

    Component: () => <BakiciProfile />,
  },
  {
    id: 5,
    title: "YORUMLAR",
    Component: () => <BakiciYorumlar />,
  },
]

const Bakici = () => {
  const [selectedNav, setSelectedNav] = useState(secondNavLinks[0])

  console.log(selectedNav)

  return (
    <>
      <NavbarBakici />

      <div className="bakici">
        <div className="bakici_links">
          {secondNavLinks.map((link) => (
            <span
              key={link.id}
              onClick={() => setSelectedNav(link)}
              className={`${
                selectedNav.id === link.id
                  ? "bakici_link_text_active"
                  : "bakici_link_text"
              }`}
            >
              {link.title}
            </span>
          ))}
        </div>
        {selectedNav.Component()}
      </div>
      <Footer />
    </>
  )
}

export default Bakici
