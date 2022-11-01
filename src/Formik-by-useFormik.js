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
			if (values.username === "") {
				errors.username = "the username field is requierd";
			}
			if (values.password === "") {
				errors.password = "the password field is requierd";
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
						// onBlur={formik.handleBlur}
						// value={formik.values.name}
						// onChange={formik.handleChange}
						{...formik.getFieldProps("name")}
						type="text"
					/>
					{formik.touched.name && formik.errors.name ? (
						<span>{formik.errors.name}</span>
					) : null}
				</div>
				<div>
					<label>User Name</label>
					<input
						name="username"
						// onBlur={formik.handleBlur}
						// value={formik.values.username}
						// onChange={formik.handleChange}
						{...formik.getFieldProps("username")}
						type="text"
					/>
					{formik.touched.username && formik.errors.username ? (
						<span>{formik.errors.username}</span>
					) : null}
				</div>
				<div>
					<label>Email Address</label>
					<input
						name="email"
						{...formik.getFieldProps("email")}
						// onBlur={formik.handleBlur}
						// value={formik.values.email}
						// onChange={formik.handleChange}
						type="text"
					/>
					{formik.touched.email && formik.errors.email ? (
						<span>{formik.errors.email}</span>
					) : null}
				</div>
				<div>
					<label>Pssword</label>
					<input
						name="password"
						{...formik.getFieldProps("password")}
						// onBlur={formik.handleBlur}
						// value={formik.values.password}
						// onChange={formik.handleChange}
						type="text"
					/>
					{formik.touched.password && formik.errors.password ? (
						<span>{formik.errors.password}</span>
					) : null}
				</div>

				<button type="submit">send</button>
			</form>
		</div>
	);
}

export default App;
