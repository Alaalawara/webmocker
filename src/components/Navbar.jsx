import { useEffect, useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user-info');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="px-15 py-2 flex justify-between items-center bg-black/30 backdrop-blur-sm relative z-50">
      <a href="/" class="group relative px-1.5 dark:text-sky-300 text-xl font-bold text-foreground italic">
        <span class="absolute inset-0 border border-dashed border-white  bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30">
        </span>WebMocker
        <svg width="5" height="5" viewBox="0 0 5 5" class="absolute top-[-2px] left-[-2px] fill-white dark:fill-white-300/50">
          <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z">
          </path>
        </svg>
        <svg width="5" height="5" viewBox="0 0 5 5" class="absolute top-[-2px] right-[-2px] fill-white dark:fill-white-300/50">
          <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z">
          </path>
        </svg>
        <svg width="5" height="5" viewBox="0 0 5 5" class="absolute bottom-[-2px] left-[-2px] fill-white dark:fill-white-300/50">
          <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z">
          </path>
        </svg>
        <svg width="5" height="5" viewBox="0 0 5 5" class="absolute right-[-2px] bottom-[-2px] fill-white dark:fill-white-300/50">
          <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z">
          </path>
        </svg>
      </a>

      {/* Right section */}
      <section className='flex flex-row gap-4 items-center justify-center'>
        <a href="https://github.com/Alaalawara" target="_blank" rel="noopener noreferrer">
          <button
            className='button_under'
          >
            <span className='button_top'>
              <span className='flex flex-row'>
                Github <svg xmlns="http://www.w3.org/2000/svg" width="21.87" height="20.801"><path d="m4.178 20.801 6.758-4.91 6.756 4.91-2.58-7.946 6.758-4.91h-8.352L10.936 0 8.354 7.945H0l6.758 4.91-2.58 7.946z" /></svg>
              </span></span>
          </button>
        </a>
        <div className="relative" ref={dropdownRef}>
          {!user ? (
            <button
              onClick={() => navigate('/login')}
              className='button_under'
            >
              <span className='button_top'>
                Login
              </span>
            </button>
          ) : (
            <>
              {/* Profile Picture */}
              <img
                src={user.image}
                alt="img"
                className="w-10 h-10 rounded-full border-4 border-foreground cursor-pointer"
                onClick={() => setDropdownOpen((prev) => !prev)}
              />

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-primary rounded-lg shadow-xl z-50 p-4 border-4 border-foreground">
                  <p className="font-semibold text-left text-foreground">{user.name}</p>
                  <p className="text-sm text-gray-600 text-left">{user.email}</p>
                  <button
                    onClick={handleLogout}
                    class='button_under'
                    className="w-full mt-2 bg-foreground"
                  >
                    <span class="button_top">
                      Logout
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </nav>
  );
}
