import { useFormik } from "formik";
import "./App.css";
function App() {
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		onSubmit: (values) => {
			console.log(values);
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
					<label>Email Address</label>
					<input
						name="email"
						value={formik.values.email}
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
