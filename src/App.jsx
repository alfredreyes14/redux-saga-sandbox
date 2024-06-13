import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getUserAction } from "./store/slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { data, isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserAction(1))
  }, [])
  
  console.log({ data, isLoading })

  return (
    <>
      Hello World
    </>
  )
}

export default App
