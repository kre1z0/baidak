export function asyncAwait () {
  let getData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('гуд жоп евриван ...')
      }, 1000)
    })
  }

  (async () => {
    let main = async ()=> {
      console.log(await getData());
    }

    await (main());

    console.log('рили сладкий')
  })()
}