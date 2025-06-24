"use client";
import { useState } from "react";
import "./App.css";

import Illustration from "./components/Illustration.jsx";
import HeaderLogo from "./components/HeaderLogo.jsx";
import InfographicInformation from "./components/InfographicInformation.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [cardData, setCardData] = useState({
    title: "",
    detail_text: "",
    src: "",
    id: "",
  });
  const handleIconClick = (data) => {
    setCardData(data); // Set the data for the Card
    setIsCardVisible(true); // Show the Card
  };

  const handleCloseCard = () => {
    setIsCardVisible(false); // Hide the Card
  };
  return (
    <div className="infographic_wrapper">
      {isCardVisible && (
        <Card
          title={cardData.title}
          detail_text={cardData.detail_text}
          src={cardData.src}
          id={cardData.id}
          url={cardData.url}
          onClose={handleCloseCard}
        />
      )}
      <HeaderLogo />

      <div className="infographic_content">
        <InfographicInformation />
        <Illustration onIconClick={handleIconClick} />
      </div>
    </div>
  );
}

export default App;
