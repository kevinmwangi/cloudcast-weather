import React, { useState, useEffect } from 'react';
import styles from './dropdown.module.scss';

interface DropdownProps {
	options: string[];
	placeholder: string;
	selectedOption?: string;
	light?: boolean;
	noBorder?: boolean;
	bgTransparent?: boolean;
	onSelect: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder, selectedOption, light, noBorder, bgTransparent, onSelect }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(selectedOption || '');

	useEffect(() => {
		setSelected(selectedOption || '');
	}, [selectedOption]);

	const handleSelect = (option: string) => {
		setSelected(option);
		onSelect(option);
		setIsOpen(false);
	};

	const toggleDropdown = () => setIsOpen(!isOpen);

	const dropdownClass = [
		'selectDropdown',
		light ? 'light' : '',
		noBorder ? 'no-border' : '',
		bgTransparent ? 'bg-transparent' : '',
		selected ? 'filled' : ''
	].join(' ');

	return (
		<div className={`${styles.dropdown} ${dropdownClass}`} onClick={toggleDropdown}>
			<span>{selected || placeholder}</span>
			{isOpen && (
				<ul>
					{options.map((option, index) => (
						<li key={index} className={selected === option ? 'active' : ''}>
							<span onClick={(e) => { handleSelect(option); }}>{option}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;