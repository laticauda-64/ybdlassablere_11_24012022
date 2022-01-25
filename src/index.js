import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './assets/css/reset.css';
import App from './App';
import { Error404 } from './pages/Error404';
import { Home } from './pages/Home';
import { About } from './pages/About';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					{/* <Route path="logement" element={'Page logement'} /> */}
					<Route path="about" element={<About />} />
					<Route index element={<Home />} />
					<Route path="404" element={<Error404 />} />
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
