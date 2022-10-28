import { useFormik } from "formik";
import "./App.css";
function App() {
	const formik = useFormik({
		initialValues: {
			name: "",
			username: "",
			email: "",
			password: "",
		},
		validate: (values) => {
			let errors = {};
			if (values.name === "") {
				errors.name = "the name field is requierd";
			} else if (values.name.length < 5) {
				errors.name = "the name field must be gt 5 char";
			}
			if (values.email === "") {
				errors.email = "the email field is requierd";
			} else if (
				!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)
			) {
				errors.email = "the email field must be email format";
			}
			console.log(errors);
			return errors;
		},
		onSubmit: (values) => {
			console.log(JSON.stringify(values));
		},
	});

	// const onSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log("submit form");
	// };

	return (
		<div className="App">
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label>Your Name</label>
					<input
						name="name"
						value={formik.values.name}
						onChange={formik.handleChange}
						type="text"
					/>
					{formik.errors.name ? <span>{formik.errors.name}</span> : null}
				</div>
				<div>
					<label>User Name</label>
					<input
						name="username"
						value={formik.values.username}
						onChange={formik.handleChange}
						type="text"
					/>
					{formik.errors.username ? (
						<span>{formik.errors.username}</span>
					) : null}
				</div>
				<div>
					<label>Email Address</label>
					<input
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						type="text"
					/>
					{formik.errors.email ? <span>{formik.errors.email}</span> : null}
				</div>
				<div>
					<label>Pssword</label>
					<input
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						type="text"
					/>
				</div>
				{formik.errors.password ? <span>{formik.errors.password}</span> : null}
				<button type="submit">send</button>
			</form>
		</div>
	);
}

export default App;
