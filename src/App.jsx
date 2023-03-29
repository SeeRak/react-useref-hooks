import { useEffect, useRef } from "react";

export function App() {
  const cardCodeInputRef = useRef();
  const expirationInputRef = useRef();

  function handleCardNumberChange(e){
    if(e.target.value.length >= 16){
      cardCodeInputRef.current.focus();
    }
  }
  function handleCardCodeChange(e){
    if(e.target.value.length >= 4){
      expirationInputRef.current.focus();
    }
  }

  useEffect( () => {
    console.log(cardCodeInputRef.current)
  }, [])

  return (
    <>
      <div>
        <label>Numéro carte bancaire</label>
        <input onChange={handleCardNumberChange} type="number" name="creditCardNumber" />
      </div>
      <div>
        <label>Code secret</label>
        <input onChange={handleCardCodeChange} ref={cardCodeInputRef} t type="number" name="creditCardCode" />
      </div>
      <div>
        <label>Expiration date</label>
        <input ref={expirationInputRef} type="text" name="creditCardExpiration" />
      </div>
    </>
  );
}
