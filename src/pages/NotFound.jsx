import { useNavigate } from 'react-router-dom';
import Thumbnail from '../assets/Thumbnail.png';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="relative h-full w-full">
      <div
        className="w-full relative bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_2px)] bg-[size:49px_50px]"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <section className="flex flex-col items-center py-5 gap-5 min-h-screen">
          <h2 className="text-3xl font-bold">Page not found</h2>
          <button onClick={() => navigate('/')} className="w-1/3" class='button_under'>
            <span class="button_top">Homepage</span>
          </button>
          <span className="border-3 rounded">
            <img src={Thumbnail} width={800} height={800}/>
          </span>
        </section>
      </div>
    </div>
  );
}
