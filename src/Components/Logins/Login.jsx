import React from 'react'
import './login.css'
// import './sign'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
	
	const overlay = () =>{
		const wrapper = document.getElementById('wrapper');
		wrapper.classList.add("right-panel-active");
	}
	const overlay2 = () =>{
		const wrapper = document.getElementById('wrapper');
		wrapper.classList.remove("right-panel-active");
	}
	
	return (
    <div>
		<div class="signbody">
			
<div class="wrapper" id="wrapper">
<div class="form-wrapper sign-up-wrapper" id="form-wrapper">

<form action="/auth/login" method="POST">
	<h1>Create Account</h1>
	<div class="social-wrapper">
		<a href="/" class="social"><FontAwesomeIcon icon={faFacebook} /></a>
		<a href="/" class="social"><FontAwesomeIcon icon={faGoogle} /></a>
		<a href="/" class="social"><FontAwesomeIcon icon={faLinkedin} /></a>
	</div>
	<span>or use your email for registration</span>
	<input type="text" name="name" placeholder="Name"/>
	<input type="email" name="email" placeholder="Email"/>
	<input type="password" name="password" placeholder="Password"/>
    <input type="passwordConfirm" name="passwordConfirm" placeholder="Confirm Password"/>
	<button>SignUp</button>
</form>
</div>
<div class="form-wrapper sign-in-wrapper">
	<form action="/auth/login" method="GET">
		<h1>Sign In</h1>
		<div class="social-wrapper">
		<a href="/" class="social"><FontAwesomeIcon icon={faFacebook} /></a>
		<a href="/" class="social"><FontAwesomeIcon icon={faGoogle} /></a>
		<a href="/" class="social"><FontAwesomeIcon icon={faLinkedin} /></a>
	</div>
	<span>or use your account</span>
	<input type="email" name="email" placeholder="Email"/>
	<input type="password" name="password" placeholder="Password"/>
	<a href="/">Forgot Your Password</a>

	<button >Sign In</button>
	</form>
</div>
<div class="overlay-wrapper">
	<div class="overlay">
		<div class="overlay-panel overlay-left">
			<h1>Welcome Back!</h1>
			<p>To keep connected with us please login with your personal info</p>
			<button  onClick={overlay2} class="ghost" id="signIn">Sign In</button>
		</div>
		<div class="overlay-panel overlay-right">
			<h1>Hello, Friend!</h1>
			<p>Enter your details and start journey with us</p>
			<button onClick={overlay} class="ghost" id="signUp">Sign Up</button>
		</div>
	</div>
</div>
</div>
    {/* {{/if message }}

    <h4 class="alert alert-danger mt-4">{{message}}</h4>

    {{/if}} */}

</div>


    </div>
  )
}





export default Login