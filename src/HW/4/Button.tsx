type ButtonPropsType = {
  callBack: () => void // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Button = ({callBack, name}: ButtonPropsType) => {
  const callBackHandler = () => {
    callBack();
  };

  return (
    <button id={'hw04-button'} onClick={() => callBackHandler()}>
      {name}
    </button>
  );
};
