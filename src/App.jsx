import { useState } from 'react'
import './App.css'
import TopHeader from './TopHeader'
import LowerHeader from './LowerHeader'

function App() {
  const [dropDown, setDropDown] = useState()

  return (
    <>
  <TopHeader/>
  <LowerHeader/>
  <body>
    <a>Home / Who We Help</a>
    <p>
    <h2>We Can Help You Make The Switch To Solar Power</h2>
  Solar power provides one of the best ways to go green if you want a reliable alternative for power. Sparrow Electric believes that solar power should be affordable and attainable by every homeowner. Using solar energy to power your home is a responsible action that should be rewarded and encouraged. That’s why we do everything to help people obtain financing, so they qualify to have residential solar panels installed on their homes.
    </p>
    <p>
      <h4>Pull The Plug And Start Saving</h4>
      The increasing cost of energy makes a significant impact on homeowners because it affects them financially. The usual process to switch to solar power includes a sizeable upfront investment that very few homeowners can make. The typical process for switching to solar power involves purchasing the panels and then paying for the installation. Although this is a step in the right direction, some property owners cannot afford the number of panels to completely replace paying the power company for a portion of their power. The most impactful way to go solar requires that you generate enough solar energy to stop paying the power company and make a lower monthly payment towards your panels.

Homeowners who prefer to own their solar panels typically opt for financing. This makes it so homeowners can switch to solar for no money down and make monthly payments on their system that are less than their power bill. Property owners begin saving on their monthly expenditures immediately because they eliminate their energy bill, plus the money they would have been throwing away at the power company is now being put towards owning their solar system. Solar power financing with Sparrow Electric allows homeowners to get the most value from their residential solar system. We designed our financing for homeowners looking to reap long-term savings rather than short-term cash flow.
    </p>
  </body>
   </>
  )
}

export default App
