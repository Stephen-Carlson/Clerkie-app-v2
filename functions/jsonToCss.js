function jsonToCss(obj) {
    const t = {fontSize:(obj['font_size']+"pt"), fontWeight : obj['font_weight'],color: obj['color'] }
    return t
    // let temp = {}
    // const oldKeys = Object.keys(obj)
    // const newKeys = Object.keys(obj).map(key => {
    //     const index = key.indexOf('_')
    //     if (index !== -1) {
    //         const camelKey = key.substring(0, index) + key.substring(index + 1, index + 2).toUpperCase() + key.substring(index + 2, key.length)
    //         temp[camelKey] = obj[key]
    //     } else if (key !== 'Text') {
    //         temp[key] = obj[key]
    //     }
    // })
    // console.log(temp)
    // //delete temp[undefined]
    // delete temp.Text
    // return temp
}