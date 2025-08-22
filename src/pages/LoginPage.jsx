import mackbookold from '../assets/mackbookold.png';
import mackbookpro from '../assets/mackbookpro.png';
import { useNavigate } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_BASE

export default function LoginPage() {
  const navigate = useNavigate();

  const handleGoogle = () => {
    // Passport redirect flow
    window.location.href = `${API_BASE}/auth/google`
  }

  return (
    <div className="relative h-full w-full">
      <div className="w-full bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:49px_50px]" style={{ backgroundColor: "var(--primary)" }}>
        <div className="min-h-screen flex items-center justify-center text-white px-4">
          <div className="flex w-full max-w-4xl bg-zinc-800 rounded-xl overflow-hidden shadow-2xl">
            {/* Left - Login Form */}
            <div className="w-full flex flex-col justify-center md:w-1/2 p-10">
              <h2 className="text-3xl font-bold mb-2">Welcome Geeks</h2>
              <p className="text-sm text-zinc-400 mb-6">
                Login using google account to access mockups
              </p>

              {/* Google Login */}
              <button
                className='button_under'
                onClick={handleGoogle}
              >
                <span className='button_top'>
                  <span className='flex flex-row items-center justify-center py-2 gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={15} height={15}>
                      <path fill="#fff" d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z" /><path fill="#e33629" d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z" /><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z" /><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z" /><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z" /></svg>
                    Login with Google
                  </span>
                </span>
              </button>
            </div>

            {/* Right - Image */}
            <div className="hidden md:flex md:w-1/2 bg-zinc-900 items-center justify-center p-8">
              <div className="space-y-4">
                <img
                  src={mackbookold}
                  alt="MacBook Old"
                  className="w-full max-w-sm rounded-lg shadow-lg"
                />
                <img
                  src={mackbookpro}
                  alt="MacBook Pro"
                  className="w-full max-w-sm rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}