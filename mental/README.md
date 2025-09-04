# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
  ==========================        ==============       =


  -- useReducer
  create reducer function(state, action)
  component: const [state, dipatch] = useReducer(reducer, { state: initial-value})

  onClick={()=> {
    dispatch({type: })
  }}

  -- usecontext
  createContext
  export default funtion Provider({children}) {
    useState and toggle

    return(
        <context.Provider value={{eieieie}}>
            {children}
        </context.Provider>
    )
  }

  main.jsx: import Provider
  App.jsx: import useContext and context
  const { theme, toggle } = useContext(context)

  -- useRef

  const inputRef = useRef(0)
  setPass(inputRef.current.value)
<form onSubmit={}>
  <input 
    ref={inputRef}
  />