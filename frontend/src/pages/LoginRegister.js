import React, { useEffect, useState } from 'react';
import '../styles/LoginRegister.css';
import axios from 'axios';

function LoginRegister() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	useEffect(() => {
		const switchers = [...document.querySelectorAll('.switcher')];

		switchers.forEach((item) => {
			item.addEventListener('click', function () {
				switchers.forEach((item) => item.parentElement.classList.remove('is-active'));
				this.parentElement.classList.add('is-active');
			});
		});
	}, []);

	const handleRegister = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const response = await axios.post('http://localhost:5001/api/auth/register', {
				email,
				password,
			});
			alert(response.data.message);
			setEmail('');
			setPassword('');
			setConfirmPassword('');
		} catch (error) {
			alert(error.response?.data?.message || 'Registration failed');
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const email = document.getElementById("login-email").value;
		const password = document.getElementById("login-password").value;
	
		try {
			const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
			alert(res.data.message);
		} catch (err) {
			alert(err.response.data.message);
		}
	};

	return (
		<section className="forms-section">
			<h1 className="section-title">Dive In</h1>
			<div className="forms">
				<div className="form-wrapper is-active">
					<button type="button" className="switcher switcher-login">
						Login
						<span className="underline"></span>
					</button>
					<form className="form form-login" onSubmit={handleLogin}>
						<div className="input-block">
							<label htmlFor="login-email">E-mail</label>
							<input
								id="login-email"
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="input-block">
							<label htmlFor="login-password">Password</label>
							<input
								id="login-password"
								type="password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button type="submit" className="btn-login">
							Login
						</button>
					</form>
				</div>

				<div className="form-wrapper">
					<button type="button" className="switcher switcher-signup">
						Sign Up
						<span className="underline"></span>
					</button>
					<form className="form form-signup" onSubmit={handleRegister}>
						<div className="input-block">
							<label htmlFor="signup-email">E-mail</label>
							<input
								id="signup-email"
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="input-block">
							<label htmlFor="signup-password">Password</label>
							<input
								id="signup-password"
								type="password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="input-block">
							<label htmlFor="signup-password-confirm">Confirm Password</label>
							<input
								id="signup-password-confirm"
								type="password"
								required
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
						<button type="submit" className="btn-signup">
							Continue
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default LoginRegister;
