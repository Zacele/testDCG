import React, {useState} from 'react';

export type TAppContext = {
  items: (string | number | null | undefined)[],
  setItems: (value: (string | number | null | undefined)[]) => void
}


export const AppContext = React.createContext<TAppContext>({
  items: [],
  setItems: () => []
})

const AppContextProvider = ({children}: { children: React.ReactNode }) => {
  const [items, setItems] = useState<(string | number | null | undefined)[]>([])

  return (
    <AppContext.Provider value={{
      items,
      setItems
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider