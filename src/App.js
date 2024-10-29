import { useEffect, useState } from 'react';
import './App.css';


export const App = () => {

	const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/todos')
				.then((loadedData) => loadedData.json())
				.then((loadedTodos) => {
					setTodos(loadedTodos)
				})
				.finally(() => setIsLoading(false));
		}, 4000);

    }, []);

	return (
		<div className="App">
		<h1>Список дел:</h1>
			{ isLoading ? ( <div className="loader"></div>) : (
				todos.map(({ id, title }) => (
							<div key={id} className='stl'>
								{id} - {title}
							</div>
						)
					)
				)
			}
		</div>
	);
}
