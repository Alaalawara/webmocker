import { Link, useNavigate } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import CLASSIC from '../assets/CLASSIC.png'
import './homepage.scss'

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative h-full w-full">
      <div className="w-full relative bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_2px)] bg-[size:49px_50px]" style={{ backgroundColor: "var(--primary)" }}>
        <section className="flex flex-col" style={{ padding: 50, gap: 50 }}>
          <div className="grid grid-cols-2" style={{ gap: 40, paddingTop: 80 }}>
            <h1 className="text-5xl font-bold max-w-3xl">
              Create beautiful <span className="underline underline-offset-4" style={{ color: "var(--white)" }}>mockups</span><br /> for your website in seconds.
            </h1>
            <span className="flex flex-row items-center justify-center">
              <div className="simple-text text-3xl italic text-foreground font-bold">Design.</div>
              <div className="simple-text">
                <span className="text-3xl italic text-foreground font-bold">Preview. Perfect.</span>
              </div>
            </span>

            <span className="flex justify-center items-center">
              <button onClick={() => navigate('/explore')} className="w-1/3" class='button_under'>
                <span class="button_top">Explore Mockups</span>
              </button>
            </span>
          </div>
          <div className="flex flex-col gap-6 pt-40">
            <h3 className='text-white underline underline-offset-5 decoration-foreground'>Elevate Your Web Presentation.</h3>
            <span className="flex items-center justify-center">
              <img src={CLASSIC} width={1300} />
            </span>
          </div>
          <FAQSection />
          <div className="flex justify-center items-center p-2 gap-20">
            <Link target="blank" rel="noopener noreferrer" className="no-underline text-white text-xl font-bold" style={{ color: "var(--white)", fontWeight: "600" }} to="https://github.com/Alaalawara/">
              GITHUB
            </Link>
            <Link target="blank" rel="noopener noreferrer" className="no-underline text-xl font-bold" to="https://x.com/loops_infinity">
              X
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
