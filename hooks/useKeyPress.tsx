import React, {useEffect, useState} from 'react'

function useKeyPress(targetKey: string): boolean {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({key}: { key: string }): void {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({key}: { key: string }): void => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
  return keyPressed;
}

export default useKeyPress;