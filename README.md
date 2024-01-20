### Convertir de promise to async awit con ejemplo de: useEffect() para usar async await desde normal con fetch:

Antes:

```sh
useEffect(() => {
    fetch('https://url-to-endpoint-api')
        .then(res => res.json())
        .then(data => console.log(data.param...)
}, [])
```

Después (el useEffect es siempre una función síncrona por lo que hay que crear una función interna async):

```sh
useEffect(() => {
    async function getRandom() {
        const res = await fetch('https://url-to-endpoint-api')
        const json = await res.json()
        console.log(json.data.param...)
    }
}, [])
```
