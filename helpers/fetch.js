async function fetcher(uri) {
    let results = await fetch(uri)
                    .then(res => {
                        if(res.status === 200) {
                            return res.json()
                        } else {
                            alert('error, try again. Status code: ', res.status)
                        }
                    }) 
                    .then(json => {
                        return json
                    })
                    .catch(err => {console.log(err);})
        return results
}

export { fetcher }