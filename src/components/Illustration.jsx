import Background from "./Background.jsx";
import "./Illustration.css";
import PropTypes from "prop-types";
import Lottie from "./Lottie.jsx";

const Illustration = ({ onIconClick }) => {
  return (
    <div className="visual_wrapper">
      <Lottie
        id="iconOne"
        src="https://lottie.host/b344e99e-bd5f-4b37-a513-7b53ee86939c/nRoHbxUrri.lottie"
        text="Hoe zit ik er straks ook warmpjes bij?"
        onClick={() =>
          onIconClick({
            title: "Hoe zit ik er straks ook warmpjes bij?",
            detail_text:
              "U wilt straks vast niet in de kou zitten. Weet u of u straks genoeg heeft? Wilt u extra pensioen opbouwen voor later? En hoe zit het bijvoorbeeld met uw koopkracht na uw pensioendatum ",
            src: "https://lottie.host/b344e99e-bd5f-4b37-a513-7b53ee86939c/nRoHbxUrri.lottie",
          })
        }
      />

      <Lottie
        id="iconTwo"
        src="https://lottie.host/9cd71201-7da1-4408-9bfe-f6744b0fa16c/sQ62EraHQw.lottie"
        text="Hoe werkt pensioen in Nederland?"
        onClick={() =>
          onIconClick({
            title: "Hoe werkt pensioen in Nederland?",
            detail_text:
              "Hoe is pensioen in Nederland geregeld en welke mogelijkheden heeft u zelf nog om uw financiële doelen te bereiken.",
            src: "https://lottie.host/9cd71201-7da1-4408-9bfe-f6744b0fa16c/sQ62EraHQw.lottie",
          })
        }
      />
      <Lottie
        id="iconThree"
        src="https://lottie.host/f15437bc-471f-4bcc-bd07-48c5c02e5289/TskXsS9Fa2.lottie"
        text="Mijn vraag staat hier niet bij..."
        onClick={() =>
          onIconClick({
            title: "Mijn vraag staat hier niet bij...",
            detail_text:
              "Heeft u een vraag die hier niet voorbij komt? Kijk dan wat u kunt doen om antwoord te krijgen.",
            src: "https://lottie.host/f15437bc-471f-4bcc-bd07-48c5c02e5289/TskXsS9Fa2.lottie",
          })
        }
      />
      <Lottie
        id="iconFour"
        src="https://lottie.host/6ad9680a-b47c-4f8d-b004-77f5fd736ec7/7Pvg297ZwC.lottie"
        text="Hoe zit het met de toekomst van mijn pensioen?"
        onClick={() =>
          onIconClick({
            title: "Hoe zit het met de toekomst van mijn pensioen?",
            detail_text:
              "We richten onze blik op de toekomst, want wie nu zaait zal straks oogsten. Wat gaat er door de Wet toekomst pensioenen veranderen aan uw pensioen en wat niet.?",
            src: "https://lottie.host/6ad9680a-b47c-4f8d-b004-77f5fd736ec7/7Pvg297ZwC.lottie",
          })
        }
      />
      <Lottie
        id="iconFive"
        src="https://lottie.host/3e6b9384-ce26-4e44-8321-8bf3a30a874f/Hh23n6npCf.lottie"
        text="Wat kan ik doen als ik krap bij kas zit?"
        onClick={() =>
          onIconClick({
            title: "Wat kan ik doen als ik krap bij kas zit?",
            detail_text:
              "Krijg grip op de k(n)ip! Tools en bespaartips om financieel gezond te worden en te blijven",
            src: "https://lottie.host/3e6b9384-ce26-4e44-8321-8bf3a30a874f/Hh23n6npCf.lottie",
          })
        }
      />
      <Lottie
        id="iconSix"
        src="https://lottie.host/150fdbb8-9792-47a3-a39c-a7f1f0f27233/NNwjD78olc.lottie"
        text="Waar vind ik info over belastingen en toeslagen?"
        onClick={() =>
          onIconClick({
            title: "Waar vind ik info over belastingen en toeslagen?",
            detail_text:
              "We helpen u op weg in de wereld van onder andere loonbelasting,loonheffingskorting en toeslagen.",
            src: "https://lottie.host/150fdbb8-9792-47a3-a39c-a7f1f0f27233/NNwjD78olc.lottie",
          })
        }
      />
      <Lottie
        id="iconSeven"
        src="https://lottie.host/6f8245af-eb0f-4fad-a7bc-ba1c0095de15/ZeHTkXM6pr.lottie"
        text="Hoe werkt het met beleggingen?"
        onClick={() =>
          onIconClick({
            title: "Hoe werkt het met beleggingen?",
            detail_text:
              "SPIN belegt voor uw pensioen. Wat komt daarbij kijken, hoe staat het met de rendementen (is het goed of slecht weer?) en wat kunt u zelf nog kiezen?",
            src: "https://lottie.host/6f8245af-eb0f-4fad-a7bc-ba1c0095de15/ZeHTkXM6pr.lottie",
          })
        }
      />
      <Lottie
        id="iconEight"
        src="https://lottie.host/a38e8613-3f66-495c-95e4-e7edba22d71f/jBCmLhJLSd.lottie"
        text="Hoe werkt met pensioen gaan?"
        onClick={() =>
          onIconClick({
            title: "Hoe werkt met pensioen gaan?",
            detail_text:
              "Houd uw voeten droog en kom erachter welke keuzes u heeft als u met pensioen gaat. En wat doen anderen eigenlijk?",
            src: "https://lottie.host/a38e8613-3f66-495c-95e4-e7edba22d71f/jBCmLhJLSd.lottie",
          })
        }
      />
      <Lottie
        id="iconNine"
        src="https://lottie.host/6c7ef318-af02-4613-8507-4fc630be988c/xM4vK1gbWm.lottie"
        text="Wat als  mijn leven verandert?"
        onClick={() =>
          onIconClick({
            title: "Wat als  mijn leven verandert?",
            detail_text:
              "Steil omhoog of juist naar beneden? Reizen, scheiden, een eerste huis, trouwen of kinderen. Wat doen deze en andere ups en downs met uw financiën?",
            src: "https://lottie.host/6c7ef318-af02-4613-8507-4fc630be988c/xM4vK1gbWm.lottie",
          })
        }
      />
      <Lottie
        id="iconTen"
        src="https://lottie.host/69e4f5a1-c8e8-4b1a-8223-54c12c37e4f7/vufvM0Nand.lottie"
        text="Hoe krijg ik grip op mijn financiën?"
        onClick={() =>
          onIconClick({
            title: "Hoe krijg ik grip op mijn financiën?",
            detail_text:
              "Tips en hulp bij (be)sparen, toeslagen, AOW en hoe u inzicht krijgt in uw inkomsten en uitgaven. Zodat niets u meer door de vingers glipt.",
            src: "https://lottie.host/69e4f5a1-c8e8-4b1a-8223-54c12c37e4f7/vufvM0Nand.lottie",
          })
        }
      />
      <Lottie
        id="iconEleven"
        src="https://lottie.host/405c0c19-3bc6-4652-9eea-5358c1bbd057/4eAHukybqJ.lottie"
        text="Wat is er geregeld bij IBM?"
        onClick={() =>
          onIconClick({
            title: "Wat is er geregeld bij IBM?",
            detail_text:
              "Krijg zicht op onder andere het solidariteitsfonds en de verzekeringen en collectiviteitskortingen die IBM aanbiedt.",
            src: "https://lottie.host/405c0c19-3bc6-4652-9eea-5358c1bbd057/4eAHukybqJ.lottie",
          })
        }
      />
      <Lottie
        id="iconTwelve"
        src="https://lottie.host/e5d725da-970e-44fe-aecf-d83998e002a3/mdrNLoKE8M.lottie"
        text="Welke pensioen-regelingen heeft SPIN?"
        onClick={() =>
          onIconClick({
            title: "Welke pensioen-regelingen heeft SPIN?",
            detail_text:
              "Hoe is uw pensioen bij SPIN geregeld. Niet alleen voor uw oude dag, maar ook als u onverhoopt ziek wordt of overlijdt. Het leven loopt niet altijd volgens plan.",
            src: "https://lottie.host/e5d725da-970e-44fe-aecf-d83998e002a3/mdrNLoKE8M.lottie",
          })
        }
      />

      <Background />
    </div>
  );
};
Illustration.propTypes = {
  onIconClick: PropTypes.func.isRequired,
};

export default Illustration;
