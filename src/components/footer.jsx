import BB64_Logo from '../assets/BB64_Logo.jpg'

function Footer() {

  return (
    <footer className="border-t border-[#ffffff27] font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-black">
        {/* LOGO */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-2 items-start">
          <img className='w-20' src={BB64_Logo} alt="BB64_Logo" />
        </div>

        {/* Musique */}
        <div>
          <h2 className="font-semibold mb-3 ">L'Orchestre</h2>
          <ul className="space-y-1">
            <li><button  className="hover:underline cursor-pointer">Nos Évènements</button></li>
            <li><button  className="hover:underline cursor-pointer">Notre musique</button></li>

          </ul>
        </div>

        {/* Association */}
        <div>
          <h2 className="font-semibold mb-3">L'association</h2>
          <ul className="space-y-1">
            <li><button  className="hover:underline cursor-pointer">A propos</button></li>
            <li><button  className="hover:underline cursor-pointer">Média</button></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-semibold mb-3"><button to='/contactUs'>Contact</button></h2>
          <p className="mb-1">06 76 67 23 59 </p>
          <a href='https://www.facebook.com/people/BIG-BAND-64/61576006091265' target='_blank' className="mb-3 hover:underline">Facebook</a>
        </div>
      </div>

      {/* Red line */}
      <div className="border-t border-[#39393927] mx-6" />

      {/* BOTTOM : Copyright + icons */}
      <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 px-6 py-4">
        <p>
          BigBand64 2025 © All right reserved
        </p>
      </div>
    </footer >
  );
};

export default Footer;