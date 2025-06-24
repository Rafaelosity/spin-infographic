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
        text="Geld voor later"
        onClick={() =>
          onIconClick({
            id: "lunch",
            title: "Hoe zit ik er straks ook warmpjes bij?",
            detail_text:
              "U wilt straks vast niet in de kou zitten. Weet u of u straks genoeg heeft? Wilt u extra pensioen opbouwen voor later? En hoe zit het bijvoorbeeld met uw koopkracht na uw pensioendatum. ",
            src: "https://lottie.host/b344e99e-bd5f-4b37-a513-7b53ee86939c/nRoHbxUrri.lottie",
            url: "https://spin.nl/content/geld-voor-later/",
          })
        }
      />

      <Lottie
        id="iconTwo"
        src="https://lottie.host/9cd71201-7da1-4408-9bfe-f6744b0fa16c/sQ62EraHQw.lottie"
        text="Pensioen in Nederland"
        onClick={() =>
          onIconClick({
            id: "golf",
            title: "Hoe werkt pensioen in Nederland?",
            detail_text:
              "Hoe is pensioen in Nederland geregeld en welke mogelijkheden heeft u zelf nog om uw financiële doelen te bereiken.",
            src: "https://lottie.host/9cd71201-7da1-4408-9bfe-f6744b0fa16c/sQ62EraHQw.lottie",
            url: "https://spin.nl/content/pensioen-in-nederland/",
          })
        }
      />
      <Lottie
        id="iconThree"
        src="https://lottie.host/f15437bc-471f-4bcc-bd07-48c5c02e5289/TskXsS9Fa2.lottie"
        text="Andere vraag?"
        onClick={() =>
          onIconClick({
            id: "boomBord",
            title: "Mijn vraag staat hier niet bij...",
            detail_text:
              "Heeft u een vraag die hier niet voorbij komt? Kijk dan wat u kunt doen om antwoord te krijgen.",
            src: "https://lottie.host/f15437bc-471f-4bcc-bd07-48c5c02e5289/TskXsS9Fa2.lottie",
            url: "https://spin.nl/content/andere-vraag",
          })
        }
      />
      <Lottie
        id="iconFour"
        src="https://lottie.host/6ad9680a-b47c-4f8d-b004-77f5fd736ec7/7Pvg297ZwC.lottie"
        text="Nieuwe pensioenregels"
        onClick={() =>
          onIconClick({
            id: "graven",
            title: "Hoe zit het met de toekomst van mijn pensioen?",
            detail_text:
              "We richten onze blik op de toekomst, want wie nu zaait zal straks oogsten. Wat gaat er door de Wet toekomst pensioenen veranderen aan uw pensioen en wat niet.?",
            src: "https://lottie.host/6ad9680a-b47c-4f8d-b004-77f5fd736ec7/7Pvg297ZwC.lottie",
            url: "https://spin.nl/content/nieuwe-pensioenregels/",
          })
        }
      />
      <Lottie
        id="iconFive"
        src="https://lottie.host/3e6b9384-ce26-4e44-8321-8bf3a30a874f/Hh23n6npCf.lottie"
        text="Grip op geld"
        onClick={() =>
          onIconClick({
            id: "kip",
            title: "Hoe krijg ik grip op mijn financiën",
            detail_text:
              "Krijg grip op dKrijg grip op uw k(n)ip! Tips en hulp bij (be)sparen, toeslagen, AOW en hoe u inzicht krijgt in uw inkomsten en uitgaven.e k(n)ip! Tools en bespaartips om financieel gezond te worden en te blijven.",
            src: "https://lottie.host/3e6b9384-ce26-4e44-8321-8bf3a30a874f/Hh23n6npCf.lottie",
            url: "https://spin.nl/content/grip-op-geld/",
          })
        }
      />
      <Lottie
        id="iconSix"
        src="https://lottie.host/150fdbb8-9792-47a3-a39c-a7f1f0f27233/NNwjD78olc.lottie"
        text="Belasting en meer"
        onClick={() =>
          onIconClick({
            id: "kaart",
            title: "Waar vind ik info over belastingen en toeslagen?",
            detail_text:
              "We helpen u op weg in de wereld van onder andere loonbelasting, loonheffingskorting en toeslagen.",
            src: "https://lottie.host/150fdbb8-9792-47a3-a39c-a7f1f0f27233/NNwjD78olc.lottie",
            url: "https://spin.nl/content/belasting-en-meer/",
          })
        }
      />
      <Lottie
        id="iconSeven"
        src="https://lottie.host/6f8245af-eb0f-4fad-a7bc-ba1c0095de15/ZeHTkXM6pr.lottie"
        text="Beleggingen"
        onClick={() =>
          onIconClick({
            id: "tent",
            title: "Hoe werkt het met beleggingen?",
            detail_text:
              "SPIN belegt voor uw pensioen. Wat komt daarbij kijken, hoe staat het met de rendementen (is het goed of slecht weer?) en wat kunt u zelf nog kiezen?",
            src: "https://lottie.host/6f8245af-eb0f-4fad-a7bc-ba1c0095de15/ZeHTkXM6pr.lottie",
            url: "https://spin.nl/content/beleggingen/",
          })
        }
      />
      <Lottie
        id="iconEight"
        src="https://lottie.host/a38e8613-3f66-495c-95e4-e7edba22d71f/jBCmLhJLSd.lottie"
        text="Met pensioen zijn"
        onClick={() =>
          onIconClick({
            id: "rivier",
            title: "Hoe werkt met pensioen gaan?",
            detail_text:
              "Wat is belangrijk voor mij als gepensioneerde? Ontdek wat voor u als gepensioneerde van SPIN goed is om te weten. Bijvoorbeeld wanneer u uw pensioenuitkering kunt verwachten of wat u moet doen als u – hop-  verhuist naar het buitenland 😊.",
            src: "https://lottie.host/a38e8613-3f66-495c-95e4-e7edba22d71f/jBCmLhJLSd.lottie",
            url: "https://spin.nl/wat-gebeurt-er-bij/met-pensioen-gaan/",
          })
        }
      />
      <Lottie
        id="iconNine"
        src="https://lottie.host/6c7ef318-af02-4613-8507-4fc630be988c/xM4vK1gbWm.lottie"
        text="Wat gebeurt er bij.."
        onClick={() =>
          onIconClick({
            id: "huisboom",
            title: "Wat als  mijn leven verandert?",
            detail_text:
              "Reizen, scheiden, een eerste huis, trouwen of kinderen. Wat doen deze en andere ups en downs met uw financiën?",
            src: "https://lottie.host/6c7ef318-af02-4613-8507-4fc630be988c/xM4vK1gbWm.lottie",
            url: "https://spin.nl/wat-gebeurt-er-bij/",
          })
        }
      />

      <Lottie
        id="iconEleven"
        src="https://lottie.host/ae15294d-82b8-44c7-a54d-5130f8b847b5/jXcvPSZbgB.lottie"
        text="Zicht op pensioen"
        onClick={() =>
          onIconClick({
            id: "toren",
            title: "Wat is er geregeld bij IBM?",
            detail_text: `Bijna met pensioen? Zo werkt het.
            Wanneer u met pensioen gaat, kunt u allerlei keuzes maken. We helpen u hier graag bij met uitleg, voorbeelden en handige hulpmiddelen.`,
            src: "https://lottie.host/ae15294d-82b8-44c7-a54d-5130f8b847b5/jXcvPSZbgB.lottie",
            url: "https://spin.nl/content/zicht-op-pensioen/",
          })
        }
      />
      <Lottie
        id="iconTwelve"
        src="https://lottie.host/e5d725da-970e-44fe-aecf-d83998e002a3/mdrNLoKE8M.lottie"
        text="SPIN pensioen"
        onClick={() =>
          onIconClick({
            id: "boom",
            title: "Welke pensioen-regelingen heeft SPIN?",
            detail_text:
              "Hoe is uw pensioen bij SPIN geregeld. Niet alleen voor uw oude dag, maar ook als u onverhoopt ziek wordt of overlijdt. Het leven loopt niet altijd volgens plan.",
            src: "https://lottie.host/e5d725da-970e-44fe-aecf-d83998e002a3/mdrNLoKE8M.lottie",
            url: "https://spin.nl/content/spin-pensioen/",
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
