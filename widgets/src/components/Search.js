import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Search = () => {

  const [term, setTerm] = useState('')
  const [deboucedTerm, setDebouncedTerm] = useState(term)
  const [results, setResults] = useState([])

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term)
    }, 1000)

    return () => {
      clearTimeout(timerId)
    }
  }, [term])

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: deboucedTerm,
        }
      })

      setResults(data.query.search)
    }

    search()

  }, [deboucedTerm])

  // useEffect(() =>  {
  //   const search = async () => {
  //     const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term,
  //       }
  //     })

  //     setResults(data.query.search)
  //   }

  //   if (term && ! results.length) {
  //     search()
  //   }
  //   else {
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         search()
  //       }
  //     }, 500)

  //     return () => {
  //       clearTimeout(timeoutId)
  //     }
  //   }
  // }, [term])

  const renderResults = results.map((r) => {
    return (
      <div className="item" key={r.pageid}>
        <div className="right floated content">
          <a className="ui button" href={`https://en.wikipedia.org?curid=${r.pageid}`}>Go</a>
        </div>
        <div className="content">
          <div className="header">
            {r.title}
          </div>
          <span dangerouslySetInnerHTML={{__html: r.snippet}}></span>
        </div>
      </div>
      )
  })
  
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input" value={term} onChange={e => setTerm(e.target.value)} />
        </div>
      </div>
      <div className="ui celled list">
        {renderResults}
      </div>
    </div>
    )
}

export default Search