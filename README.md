### Convertir de promise to async awit con ejemplo de: useEffect() para usar async await desde normal con fetch:

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

Después (el useEffect es siempre una función síncrona por lo que hay que crear una función interna async):

```js
useEffect(() => { // captura de errores con el try... catch
    async function getRandom() {  // o const getRandom = async() => {...}
        const res = await fetch('https://url-to-endpoint-api')
        const json = await res.json()
        console.log(json.data.param...)
    }
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
