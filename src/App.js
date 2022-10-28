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
				</div>
				<div>
					<label>User Name</label>
					<input
						name="username"
						value={formik.values.username}
						onChange={formik.handleChange}
						type="text"
					/>
				</div>
				<div>
					<label>Email Address</label>
					<input
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						type="text"
					/>
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
				<button type="submit">send</button>
			</form>
		</div>
	);
}

export default App;
