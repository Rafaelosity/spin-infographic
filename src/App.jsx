import './App.css';
import Background from './components/Background';
import Lottie from './components/Lottie';

function App() {

  return (
    <div className='infographic_wrapper'>
      <div className="infographic">
        <Lottie 
          href="https://spin.nl"
          id="iconOne" 
          src="https://lottie.host/b344e99e-bd5f-4b37-a513-7b53ee86939c/nRoHbxUrri.lottie"
          text="Hoe zit ik er straks ook warmpjes bij?" />
        <Lottie
          href="https://spin.nl"
          id="iconTwo"
          src="https://lottie.host/3a099a10-6f20-4f29-9e5a-f8bbd67f6b34/uVnkGMWAbk.lottie"
          text="Hoe werkt pensioen in Nederland?" />
        <Lottie
          href="https://spin.nl"
          id="iconThree"
          src="https://lottie.host/f15437bc-471f-4bcc-bd07-48c5c02e5289/TskXsS9Fa2.lottie"
          text="Mijn vraag staat hier niet bij..." />
        <Lottie
          href="https://spin.nl"
          id="iconFour"
          src="https://lottie.host/6ad9680a-b47c-4f8d-b004-77f5fd736ec7/7Pvg297ZwC.lottie"
          text="Hoe zit het met de toekomst van mijn pensioen?" />
        <Lottie
          href="https://spin.nl"
          id="iconFive"
          src="https://lottie.host/3e6b9384-ce26-4e44-8321-8bf3a30a874f/Hh23n6npCf.lottie"
          text="Wat kan ik doen als ik krap bij kas zit?" />
        <Lottie
          href="https://spin.nl"
          id="iconSix"
          src="https://lottie.host/150fdbb8-9792-47a3-a39c-a7f1f0f27233/NNwjD78olc.lottie"
          text="Waar vind ik info over belastingen en toeslagen?" />
          <Lottie 
          href="https://spin.nl"
          id="iconSeven"
          src="https://lottie.host/6f8245af-eb0f-4fad-a7bc-ba1c0095de15/ZeHTkXM6pr.lottie"
          text="Hoe werkt het met beleggingen?" />
          <Lottie 
          href="https://spin.nl"
          id="iconEight"
          src="https://lottie.host/32f765e1-2c63-4182-8c57-8d09eee67006/cnnSDvRJ3W.lottie"
          text="Hoe werkt met pensioen gaan?" />
          <Lottie 
          href="https://spin.nl"
          id="iconNine"
          src="https://lottie.host/6c7ef318-af02-4613-8507-4fc630be988c/xM4vK1gbWm.lottie"
          text="Wat als  mijn leven verandert?" />
          <Lottie 
          href="https://spin.nl"
          id="iconTen"
          src="https://lottie.host/6cdbfd9b-cab9-49d4-b451-6225e607262f/78qYiJ7klr.lottie"
          text="Hoe krijg ik grip op mijn financiën?" />
          <Lottie 
          href="https://spin.nl"
          id="iconEleven"
          src="https://lottie.host/bd04e5e7-7ba5-4d53-9346-2395ccfd5983/AT8aEE3EWE.lottie"
          text="Wat is er geregeld bij IBM?" />
          <Lottie 
          href="https://spin.nl"
          id="iconTwelve"
          src="https://lottie.host/e5d725da-970e-44fe-aecf-d83998e002a3/mdrNLoKE8M.lottie"
          text="Welke pensioen-regelingen heeft SPIN?" />
        <Background />
      </div>
    </div>
  );
}

export default App;