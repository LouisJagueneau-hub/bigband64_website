import WelcomeImage from "../assets/WelcomeImage.svg"
import SwingDance from "../assets/BB64Danseur Swing.svg"
import EventImage from "../assets/EventImage1.png"

function Home() {
  return (
    <div>

      {/* Welcome section */}
      <div className="flex flex-col justify-center items-center lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:mt-8">
        <div className="lg:w-1/2 flex justify-end">
          <img src={WelcomeImage} alt="WelcomeImage" className="w-[75%] max-w-[400px]" />
        </div>
        <div className="flex flex-col items-center justify-center mt-2 lg:w-1/2 lg:items-start">
          <h1 id="home" className="text-[#FF7723] text-[2.2rem] sm:text-[2.5rem] font-shrikhand">LE BIG BAND 64</h1>
          <h2 className="text-black font-shrikhand text-[2.0rem] text-center leading-relaxed lg:text-start">L'énergie du Swing pour faire danser vos soirées !</h2>
          <p className="leading-loose mt-5 font-istokweb text-[0.95rem] text-justify">Nous sommes un groupe de musiciens passionnés, réunis autour du swing. Ouverts aux danseurs, nous animons vos soirées avec un répertoire irrésistible : Lindy Hop, Balboa, Blues, West Coast Swing, Tcha-Tcha… et bientôt des rythmes latinos !</p>
          <div className="flex flex-row gap-14 justify-center items-center mt-8">
            <button onClick={() => {
              const section = document.getElementById('event');
              section?.scrollIntoView({ behavior: 'smooth' });
            }} className="font-poppins bg-[#FF7723] text-white font-semibold px-4 py-2 rounded-[5px] flex items-center gap-2 cursor-pointer">Nos Événements <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg></button>
            <button onClick={() => {
              const section = document.getElementById('music');
              section?.scrollIntoView({ behavior: 'smooth' });
            }} className="font-poppins border-2 border-[#FF7723] rounded-[5px] px-3 py-2 text-[#FF7723] font-semibold cursor-pointer">Notre Musique</button>
          </div>
        </div>
      </div>

      {/* Qui sommes nous ? section */}
      <div className="mt-20 flex flex-col items-center justify-center mb-10">
        <div className="flex flex-col items-center">
          <h2 id="whoweare" className="font-shrikhand text-[1.8rem]">QUI SOMMES NOUS ?</h2>
          <span className="border-3 border-[#FF7723] block w-[110%] items-center"></span>
        </div>
        <div className="lg:flex lg:gap-8 lg:items-stretch mt-14">
          {/* Colonne gauche : Association*/}
          <div className="lg:w-5/7 flex flex-col gap-8 ">
            <div className="bg-white px-8 py-6 rounded-[10px] shadow-md flex flex-1 flex-col">
              <p className="font-shrikhand text-[1.3rem] mb-5">Une association</p>
              <div className="flex flex-row gap-8 items-stretch h-full">
                <span className="border-3 rounded-full border-[#FF7723] opacity-75"></span>
                <div className="flex flex-col gap-5 font-istokweb leading-relaxed text-justify text-[0.9rem] justify-between">
                  <p>Le Big Band 64, c’est avant tout une association de passionnés de musique swing et jazz, réunis autour d’une même envie : faire vivre le swing du Béarn au Pays Basque !</p>
                  <p>Notre collectif rassemble des musiciens amateurs et confirmés, unis par le plaisir de jouer ensemble et de partager l’énergie joyeuse du swing avec le public.</p>
                  <p>Mais notre mission ne s’arrête pas à la scène : nous travaillons main dans la main avec danseurs, associations et écoles de danse, pour faire de chaque événement un moment festif et convivial.</p>
                </div>
              </div>
            </div>

            {/* Colonne gauche : Objectif*/}
            <div className="bg-white px-8 py-6 rounded-[10px] shadow-md w-full ">
              <p className="font-shrikhand text-[1.3rem] mb-5">Nos Objectifs</p>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-3">
                  <p className="font-istokweb text-[0.9rem] flex items-center gap-2"><span className="text-[1.3rem] font-bold">1 - </span>Promouvoir la musique swing</p>
                  <p className="font-istokweb text-[0.9rem] flex items-center gap-2"><span className="text-[1.3rem] font-bold">2 - </span>Organiser des concerts</p>
                  <p className="font-istokweb text-[0.9rem] flex items-center gap-2"><span className="text-[1.3rem] font-bold">3 - </span>Créer du lien entre musiciens</p>
                  <p className="font-istokweb text-[0.9rem] flex items-center gap-2"><span className="text-[1.3rem] font-bold">4 - </span>Encourager la découverte</p>
                </div>
                <div>
                  <img src={SwingDance} alt="SwingDance" />
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite : Membres */}
          <div className="lg:w-2/7 mt-12 lg:mt-0 ">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 h-full">

              <div className="bg-white shadow-md rounded-[10px] flex flex-col px-8 py-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-[#FF7723] shadow-sm p-[0.2rem] rounded-[5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </div>
                  <p className="font-istokweb text-[#0A0A0A] opacity-75 text-[1.3rem] font-bold">18 <span className="text-sm font-normal ml-1">Membres</span></p>
                </div>
                <div className="text-justify font-istokweb text-[0.8rem]">
                  <p>Un big band de 18 musiciens mené par Vincent, où swing, chant et claquettes s’unissent pour faire vibrer les danseurs.</p>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-[10px] flex flex-col px-8 py-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-[#FF7723] shadow-sm p-[0.2rem] rounded-[5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </div>
                  <p className="font-istokweb text-[#0A0A0A] opacity-75 text-[1.3rem] font-bold">1 <span className="text-sm font-normal ml-1">Partenaire</span></p>
                </div>
                <div className="text-justify font-istokweb text-[0.8rem]">
                  <p> La commune de Lée (64320) nous accueille tous les lundis dans la salle multi-activités pour les répétitions et les événements ouverts au public : <a className="text-blue-700" target="_blank" href="https://lee64.fr/">https://lee64.fr/</a></p>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-[10px] flex flex-col px-8 py-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-[#FF7723] shadow-sm p-[0.2rem] rounded-[5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </div>
                  <p className="font-istokweb text-[#0A0A0A] opacity-75 text-[1.3rem] font-bold">+30 <span className="text-sm font-normal ml-1">Morceaux</span></p>
                </div>
                <div className="text-justify font-istokweb text-[0.8rem]">
                  <p> Notre répertoire s’enrichit chaque mois, principalement conçu pour la danse swing (Shim-Sham, Lindy hop, balboa, blues, rock and roll, West Coast swing, tcha-tcha), avec bientôt quelques zest de rythmes latinos. </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Évènement à venir */}
      <div className="flex flex-col items-center mt-16 ">
        <div className="flex flex-col items-center">
          <h2 id="event" className="font-shrikhand text-[1.8rem]">ÉVÉNEMENT À VENIR</h2>
          <span className="border-3 border-[#FF7723] block w-[110%] items-center"></span>
        </div>

        <div className="bg-white rounded-[10px]  border-b-2 border-b-[#FF7723] flex flex-col items-center mt-10 px-6 py-6 w-[25rem]">
          <img src={EventImage} alt="Image de l'évènement" className="w-full h-[200px] object-cover shadow-md" />
          <div className="mt-5 flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center">
              <h4 className="font-semibold font-istokweb text-[1.4rem]">Fête de la musique</h4>
              <span className="rounded-[10px] bg-[#ffe7b7] text-[#FCC12A] text-[0.7rem] px-2  flex items-center">A VENIR</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(100,116,139)" class="bi bi-calendar2-week" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
              </svg>
              <p className="font-poppins text-[#64748B] text-[0.8rem]">22 juin 2025, 14h00 - 19h00 </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="rgb(100,116,139)" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <p className="font-poppins text-[#64748B] text-[0.7rem]">Lée 64320</p>
            </div>
            <p className="text-justify font-istokweb text-[1.0rem] leading-relaxed text-[#64748B] mt-5">Que vous aimiez danser ou simplement écouter de la musique, venez passer une après-midi conviviale et festive. Laissez-vous porter par l’ambiance, partagez un bon moment et repartez avec de beaux souvenirs, seul, en famille ou entre amis (<a className="text-blue-700 font-semibold" target="_blank" href="https://www.facebook.com/events/1189710636240998">en savoir plus</a>) </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-16 ">
        <div className="flex flex-col items-center">
          <h2 id="music" className="font-shrikhand text-[1.8rem]">NOTRE MUSIQUE</h2>
          <span className="border-3 border-[#FF7723] block w-[110%] items-center"></span>
        </div>
        <div>
          <video controls className="w-full mt-8 rounded-md shadow">
            <source src="/video/Big_Band_64_Coarraze.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Home;