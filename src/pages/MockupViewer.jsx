import { useParams } from 'react-router-dom';
import { useState, useContext  } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Macbook from '../components/Macbook';
import MacbookDark from '../components/Macbook-dark'
import WhiteLayout from '../components/Whitelayout';
import GreyLayout from '../components/Greylayout';
import DarkLayout from '../components/Darklayout';
import NeonLayout from '../components/Neonlayout';

const mockupComponents = {
  1: Macbook,
  2: MacbookDark,
  3: WhiteLayout,
  4: GreyLayout,
  5: DarkLayout,
  6: NeonLayout,
};

export default function MockupViewer() {
  const { id } = useParams();
  const [url, setUrl] = useState('');
  const [bg, setBg] = useState('#3E6DD9');
  const { user } = useContext(UserContext);

  const mockupId = parseInt(id);
  const MockupComponent = mockupComponents[mockupId];


  function isValidUrl(str) {
    try {
      const url = new URL(str);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
      return false;
    }
  }

  return (
    <div className="relative h-full w-full">
      <div className="w-full bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:49px_50px]" style={{ backgroundColor: "var(--primary)" }}>
        <section className="p-8" style={{ display: "flex", flexDirection: "column", gap: 10, padding: '40px' }}>
          <h2 className="text-2xl font-bold mb-4">Live Mockup Preview</h2>
          {/* url and background change */}
          <div className="flex flex-row md:flex-row mb-6 border-2 border-solid item-center justify-center rounded-3xl p-4 border-foreground gap-10">
            {url && !isValidUrl(url) && (
              <span className="content-center">Please enter a valid website URL</span>
            )}
            <input
              type="url"
              placeholder="Enter website URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-1/5 p-2 border text-white rounded-2xl"
              style={{
                border: '2px solid',
                borderColor: isValidUrl(url) ? 'white' : 'var(--foreground)'
              }}
            />
            <input
              type="color"
              value={bg}
              onChange={(e) => setBg(e.target.value)}
              className="w-1/9 h-12 "

            />
          </div>

          <div className="flex justify-center items-center" style={{ background: bg, padding: 100, minHeight: "1000px" }}>
            {/* MacBook Mockup Container */}
            <MockupComponent url={url} />
          </div>
        </section>
      </div>
    </div>
  );
}
