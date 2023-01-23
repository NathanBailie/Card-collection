import 'normalize.css';
import './app.scss';
import picture1 from '../../resources/img/picture1.jpg';
import picture2 from '../../resources/img/picture2.jpg';
import picture3 from '../../resources/img/picture3.jpg';
import picture4 from '../../resources/img/picture4.jpg';
import picture5 from '../../resources/img/picture5.jpg';
import picture6 from '../../resources/img/picture6.jpg';
import picture7 from '../../resources/img/picture7.jpg';
import picture8 from '../../resources/img/picture8.jpg';
import { PictureObject } from '../../interfaces';
import uuid from 'react-uuid';
import { useState } from 'react';

const App: React.FC = () => {
	const pictures: PictureObject[] = [
		onPutInObject(picture1),
		onPutInObject(picture2),
		onPutInObject(picture3),
		onPutInObject(picture4),
		onPutInObject(picture5),
		onPutInObject(picture6),
		onPutInObject(picture7),
		onPutInObject(picture8),
	];
	const [data, setData] = useState(pictures);

	function onPutInObject(picture: string): PictureObject {
		return { src: picture, active: false, id: uuid(), text: 'T. Kinkade' }
	};

	const result = data.map((picture, index) => {
		const { src, active, id, text } = picture;
		let pictureClasses = 'app__picture';
		let signatureСlasses = 'app__signature';

		if (active) {
			pictureClasses += ' app__picture_active';
			signatureСlasses += ' app__signature_active';
		}
		return (
			<div
				className={pictureClasses}
				key={id}
				onClick={() => onChangeProp(id)}
			>
				<img src={src} alt={`picture ${index + 1}`} />
				<h3 className={signatureСlasses}>{text}</h3>
			</div>
		);
	});

	function onChangeProp(id: string): void {
		const newData = data.map(item => {
			if (item.id === id) {
				return { ...item, ['active']: !item['active'] };
			};
			return { ...item, ['active']: false };

		});
		setData(newData);
	};


	return (
		<div className="app">
			<h1 className='app__title'>Thomas Kinkade</h1>
			<div className="app__wraper">
				{result}
			</div>
		</div>
	);
};

export default App;
