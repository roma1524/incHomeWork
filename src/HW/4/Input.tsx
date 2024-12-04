type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: any // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = ({setCurrentText, currentText}: InputPropsType) => {
	const onChangeHandler = (event: Parameters<NonNullable<React.ComponentProps<"input">["onChange"]>>[0]) => {
		// НУЖНО ДОПИСАТЬ
		setCurrentText(event.target.value);
	};

	return (
	  <input id={'hw04-input'} type="text" value={currentText} onChange={(event) => onChangeHandler(event)} />
	);
};
