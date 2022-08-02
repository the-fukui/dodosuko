 const love = (array: string[] = []) => {
    const random = ['ドド','スコ'][Math.round(Math.random())]
    if(array.length >= 12) array.shift()
    array.push(random)
    console.log(array.at(-1))
    if (array.join('') === 'ドドスコスコスコドドスコスコスコドドスコスコスコ') {
      console.log('ラブ注入♡')
      return
    }
    love(array)
  }

  love()
