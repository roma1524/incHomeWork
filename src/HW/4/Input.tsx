import React from 'react';

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (arg: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = ({setCurrentText, currentText}: InputPropsType) => {
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentText(event.currentTarget.value);
	};

	return (
	  <input id={'hw04-input'} type="text" value={currentText} onChange={(event) => onChangeHandler(event)} />
	);
};
