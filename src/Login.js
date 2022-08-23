
import React, {useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // OnChange Handler
    const onChange = (event) => {
        
        const {
            target: { name, value },
          } = event;
          if (name === "email") {
            setEmail(value);
          } else if (name === "password") {
            setPassword(value);
          }
          
      };
    
    // Submit handler
    const onSubmit = (e) => {
        e.preventDefault();

    };
    
    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border-4 border-sky-500 drop-shadow-lg py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Young Professionals Login
                </h1>
            <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    name="email"
                    className={`w-full p-2 text-primary border-2 focus:border-sky-500 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    name="password"
                    className={`w-full p-2 text-primary border-2 focus:border-sky-500 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange}
                />
            </div>
            
                <input 
                    className={`bg-sky-500 hover:bg-sky-700 py-3 px-5 text-sm
                             text-white rounded-xl border border-green 
                             focus:outline-none focus:border-green-dark`}
                    type="submit" 
                    value="Log In" 
                />
            </form>
            <div>
            <button>Continue with Google</button>
            <button>Continue with Github</button>
            </div>
        </div>
    </div>
    );
};

/* SAved 
  <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border-4 border-sky-500 drop-shadow-lg py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Young Professionals Login
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border-2 focus:border-sky-500 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border-2 focus:border-sky-500 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            required
                            onChange={onChange}
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-sky-500 hover:bg-sky-700 py-3 px-5 text-sm
                             text-white rounded-xl border border-green 
                             focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                        <button
                            className={`bg-sky-500 hover:bg-sky-700 py-3 px-5 text-sm
                             text-white rounded-xl border border-green 
                             focus:outline-none focus:border-green-dark`}
                        >
                            Create new
                        </button>
                    </div>
                </form>
            </div>
        </div>

*/


export default Login;