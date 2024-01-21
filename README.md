# Tips para pruebas técnicas y que tener en cuenta con React

### Configurar react desde cero usando vite con vanillaJS

1. Instalar desde cero lo necesario:

```sh
npm create vite@latest #Elegir vanillaJS
npm install @vitejs/plugin-react -E #Instalar plugin de react
npm install react react-dom -E
```

2. Crear `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
```

3. Crear (o cambiar nombre `main.js`) a `main.jsx`:

```sh
import React from 'react'
import { createRoot } from 'react-dom/client'
# import { App } from './src/App.jsx'

const root = createRoot(document.getElementById('app'))

root.render(<h1>Hello World!</h1>)
```

4. Instalar el linter:

```sh
npm install standard -D
```

Agregar al `package.json`:

```json
"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }
```

### Convertir `promise` to `async await` con ejemplo de uso en `useEffect()` usando un `fetch()`:

Antes:

```js
useEffect(() => {
    fetch('https://url-to-endpoint-api')
        .then(res => {
            if (!res.ok) throw new Error('Error fetching fact')  // importante para capturar los errores en el catch (con axios no es necesario)
            return res.json()
        })
        .then(data => console.log(data.param...)
        .catch((err) => {
            // tanto sí hay error con la respuesta
            // como sí hay un error en la petición
        })
}, [])
```

Después (el `useEffect` es siempre una función síncrona por lo que solo se puede usar como función interna adicional en una función `async...`):

```js
useEffect(() => { // captura de errores con el try... catch
    async function getRandom() {  // o const getRandom = async() => {...}
        const res = await fetch('https://url-to-endpoint-api')
        const json = await res.json()
        console.log(json.data.param...)
    }

    getRandom()
}, [])
```

### Centrar todo el contenido usando `flex``.

En vertical o de columna (o para mobile):

```js
    <main style={{ display: flex; flex-direction: column; place-items: center; max-width: 800px; margin; 0 auto; font-family: system-ui}}>
        <Component1>
        <h1>Ejemplo.. </h1>
    </main>
```

o Css:

```css
main {
    display: flex;
    flex-direction: column;
    place-items: center;
    max-width: 800px;
    margin; 0 auto;
    font-family: system-ui
}
```

En fila u horizontal (o para desktop):

```js
<main>
  <h1>App de gatitos</h1>
  <section>
    {fact && <p>{fact}</p>}
    {imageURL && <img src={`imgURL`} alt={`Image of ${fact}`} />}
  </section>
</main>
```

```css
section {
    display: flex:
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

section img {
    max-width: 320px;
    height: auto;
}
```

### Hacer end to end test rápido usando playwright:

Instalar playwright y ejecutarlo:

```sh
npm init playwright
```

2. Renombrar `playwright.config.js` por `playwright.config.cjs`

3. Cambiar en el ejemplo `example.spec.js` la línea:

```js
// const { test, expect } = require('@playwright/test')
import { test, expect } from '@playwright/test'
```

4. Ejecutar los tests que están en la carpeta `tests`:

```sh
npx playwright test
# para ver un reporte
npx playwright show-report
```

Ver referencias: https://playwright.dev/docs/locators

### Instalar react + typescript

```sh
npm create vite@latest # elegir react + typescript + swc
cd dir-de-instalación
npm install
# configurar linter e iniciar linter
npx eslint --init  # react, browser, standard-with-typescript, javascript
```

- Para que funcione el linter, agregar al `.eslintrc.cjs`:
-

```json
paserOptions : {..., project: './tsconfig.json'}

# definir aquí con off las reglas que deseamos desactivar
rules: {
    ''
}
```

### LocalStore

```js
const [favorites, setFavorites] = useState({})

# Leer
localStore.getItem("favorites")
# Almacenar
localStore.setItem("favorites", JSON.Stringify(favorite))
```

Lo contrario del `JSON.Stringify(json) => string` es el `JSON.parse(string) => json`

## Referencias

- Ejemplo de css genérico que se puede usar en cualquier aplicación cómo punto de partida.
  URL: https://cdn.jsdelivr.net/npm/water.css@2/out/water.css
  Web: https://watercss.kognise.dev/#
- Preguntas entrevistas técnicas (midu): https://github.com/midudev/preguntas-entrevista-react
- Ejemplos de proyectos con videos (midu.dev): https://github.com/midudev/aprendiendo-react?tab=readme-ov-file
- Simulacros de entrevistas en videos (Goncy): https://www.youtube.com/results?search_query=goncy+Simulacro+de+entrevista
