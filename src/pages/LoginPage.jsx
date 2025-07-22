import { useGoogleLogin } from '@react-oauth/google';
import mackbookold from '../assets/mackbookold.png';
import mackbookpro from '../assets/mackbookpro.png';
import google from '../assets/google.svg'
import {useNavigate} from 'react-router-dom';
import { googleAuth } from '../components/Api'

export default function LoginPage() { 
  const navigate = useNavigate();
  
  const responseGoogle = async (authResult) => {
		try {
			if (authResult["code"]) {
				const result = await googleAuth(authResult.code);
				const {email, name, image} = result.data.user;
				const token = result.data.token;
				const obj = {email,name, token, image};
				localStorage.setItem('user-info',JSON.stringify(obj));
				navigate('/');
        window.location.reload();
			} else {
				console.log(authResult);
				throw new Error(authResult);
			}
		} catch (e) {
			console.log('Error while Google Login...', e);
		}
	};

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code'
  })

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
                onClick={googleLogin}
              > 
              <span className='button_top'>
                 <span className='flex flex-row items-center justify-center py-2 gap-2'>
                <img width={15} height={15} src={google}/> Login with Google
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