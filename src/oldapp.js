import './App.css';
import NavBar from './components/navbar';
import CardHome from './components/card';
import API from './components/api';
import Footer from './components/footer';


function App() {
  return (
    <>
    <div className="App bg-black">
        <NavBar />
        <div className='h-0.5 bg-slate-900'>
        </div>
        <div className="p-4 md:flex md:flex-row md:justify-center">
          <div className="md:p-4">
            <CardHome title="Découvrez notre nouvelle outil de prototypage" description="Créez facilement des interfaces interactives sans coder grâce à notre outil de prototypage par blocs." version="1.0" />
          </div>
          <div className="py-2">
          </div>
          <div className="md:p-4">
            <CardHome title="Découvrez notre nouvelle outil de codage par block" description="Découvrez notre outil de codage par bloc pour créer des applications simplement et rapidement, sans coder." version="1.0" />
          </div>
        </div>
        <div className="mt-4 text-lg font-semibold text-white sm:text-xl p-5 min-[900px]:flex p-2">
          <img className='min-[900px]:w-1/6 p-2' src={"https://openaicom.imgix.net/8d14e8f0-e267-4b8b-a9f2-a79120808f5a/chatgpt.jpg?fm=auto&amp;auto=compress,format&amp;fit=min&amp;rect=0,0,2048,2048&amp;w=1919&amp;h=1919"} alt="ChatGPT graphic" />
          <p>
            iChat est un outil de prototypage et de développement d'applications qui permet de créer des interfaces et des applications rapidement et facilement. Grâce à une interface intuitive et conviviale, les utilisateurs peuvent créer des applications sans avoir besoin d'une expertise en programmation. iChat utilise des blocs de fonctionnalités pré-construits qui peuvent être personnalisés pour répondre aux besoins spécifiques de l'utilisateur, sans avoir à écrire de code. Les blocs comprennent une variété d'éléments tels que des boutons, des menus déroulants, des tableaux, des champs de texte et des graphiques. Les utilisateurs peuvent choisir parmi ces blocs et les personnaliser pour créer des interfaces et des applications personnalisées. iChat est l'outil idéal pour créer rapidement et simplement des interfaces et des applications, que vous soyez un débutant en développement d'applications ou un expert en programmation. Avec iChat, vous pouvez créer des prototypes fonctionnels, ajuster le design et simuler votre application en direct. Essayez-le dès aujourd'hui et découvrez à quel point la création d'applications peut être facile et amusante.
          </p>
        </div>
        <API />
        <Footer />
      </div></>
  );
}

export default App;
