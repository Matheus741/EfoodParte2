import React, { createContext, useState, useContext } from 'react'

export type Dish = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
}

interface CartContextData {
  items: Dish[]
  isOpen: boolean
  addItem: (dish: Dish) => void
  removeItem: (id: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Dish[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (dish: Dish) => {
    setItems((prev) => [...prev, dish])
    setIsOpen(true)
  }

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setItems([])
    setIsOpen(false)
  }

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItem,
        removeItem,
        clearCart,
        openCart,
        closeCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)