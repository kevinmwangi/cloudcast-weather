import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { langActions } from '../../../app/actions/intl';
import Dropdown from '../Dropdown';

const LangToggle: React.FC = () => {
	const dispatch = useAppDispatch();
	const lang = useAppSelector((state) => state.lang.lang);
	const toggleLang = (option: string) => {
		dispatch(langActions.toggleLang(option));
	};

	return (
		<div>
			<h1>Toggle Language</h1>
			<Dropdown options={['en', 'swa', 'ar']} light={true} selectedOption={lang} placeholder={'Select Language'} onSelect={toggleLang} />
		</div>
	);
};

export default LangToggle;