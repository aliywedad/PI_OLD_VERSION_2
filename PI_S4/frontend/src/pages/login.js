import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import { loggedInCookie, UserLoggedInCookie } from '../component/Cookies';
import { APIs } from '../component/APIs';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Login() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(APIs.Authantification, { email: data.email, password: data.pwd });
            console.log('Success:', response.data);
            console.log("Response status:", response.status);
            if (response.data.message === "Successful") {
                // loggedInCookie(response.data.user);
                // const user = UserLoggedInCookie();
                // console.log("Data from cookie from the login page:", user.login);
                navigate('/DA');
            }
        } catch (error) {
            console.log('Error:', error.response.status);

            if (error.response.status === 410) {
                Swal.fire({
                    title: "Erreur",
                    text: "Email incorrect !",
                    icon: "error"
                });
            }
            if (error.response.status === 411) {
                Swal.fire({
                    title: "Erreur",
                    text: "Mot de passe incorrect !",
                    icon: "error"
                });
            }
            if (error.response.status === 412) {
                Swal.fire({
                    title: "Erreur",
                    text: "Compte désactivé, veuillez contacter l'administrateur !",
                    icon: "error"
                });
            }
            if (error.response.status === 413) {
                Swal.fire({
                    title: "Erreur",
                    text: "Vous n'avez pas le droit d'accès !",
                    icon: "error"
                });
            }

            // Optionally, you can set an error message to display on the form
            // setError('Invalid email or password');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen login-400-mt whitesmoke">
            <div className="max-w-md w-full px-4">
                <h1 className="text-center text-2xl mb-4">Connexion</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Mot de passe
                        </label>
                        <input
                            {...register("pwd")}
                            type="password"
                            name="pwd"
                            id="password"
                            placeholder="Mot de passe"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        {error && <p className="text-red-500 text-xs italic">{error}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Connexion
                        </button>
                    </div>
                </form>
                <p> si vous n'avais pas de compte <a href='/register'>S'inscrire </a></p>

            </div>
        </div>
    );
}
