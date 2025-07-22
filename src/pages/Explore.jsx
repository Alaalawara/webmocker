import { Link } from 'react-router-dom';
import mackbookold from '../assets/mackbookold.png'
import mackbookpro from '../assets/mackbookpro.png'
import whitelayout from '../assets/whitelayout.png'
import greylayout from '../assets/greylayout.png'
import darklayout from '../assets/darklayout.png'
import neonlayout from '../assets/neonlayout.png'

const mockups = [
  {
    id: 1,
    title: 'MacBook Pro Light',
    description: 'macbook · light theme · premium',
    premium: true,
    image: mackbookold,
  },
  {
    id: 2,
    title: 'MacBook Pro Dark',
    description: 'macbook · dark theme · premium',
    premium: true,
    image: mackbookpro,
  },
  {
    id: 3,
    title: 'Classic White',
    description: 'classic · light theme · premium',
    premium: true,
    image: whitelayout,
  },
   {
    id: 4,
    title: 'Classic Grey',
    description: 'classic · grey theme · premium',
    premium: true,
    image: greylayout,
  },
  {
    id: 5,
    title: 'Classic Dark',
    description: 'classic · dark theme · premium',
    premium: true,
    image: darklayout,
  },
  {
    id: 6,
    title: 'Neon Layout',
    description: 'classic · neon theme · premium',
    premium: true,
    image: neonlayout,
  },
];

export default function Explore() {

  return (
    <div className="relative h-full w-full">
  <div className="w-full relative bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_2px)] bg-[size:49px_50px]" style={{backgroundColor:"var(--primary)"}}>
      <section className='flex flex-col items-center py-20'>
      <h2 className="text-3xl font-bol mb-10">Instant Mockups for Every Device</h2>
      <div className="grid grid-cols-2 justify-center items-center overflow-hidden gap-10">
        {mockups.map((mockup) => (
          <Link
            key={mockup.id}
            to={`/mockup/${mockup.id}`}
            className="bg-zinc-900 overflow-hidden shadow-xl no-underline transition hover:scale-[1.01]"
          >
            <div className="w-full flex justify-center items-center h-[300px] bg-zinc-700">
              <img
                src={mockup.image}
                alt={mockup.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-4 felx justify-items-start" >
              <h4 className="text-xl font-semibold text-white">{mockup.title}</h4>
              <p className="text-zinc-400 mt-1 text-sm" style={{fontStyle:"italic" }}>{mockup.description}</p>
            </div>
          </Link>
        ))}
      </div>
      </section>
    </div>
    </div>
  );
}
