import React, {useState, useEffect, useRef} from 'react'

const Dropdown = ({options, selected, onSelectedChange, label}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const onBodyClick = (e) => {
      // console.log('CLICK')
      if (ref.current.contains(e.target)) {
        return
      }
      setOpen(false);
    }

    document.body.addEventListener('click', onBodyClick, { capture: true })

    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true })
    }
  }, [])

  const renderOptions = options.map((o) => {
    if (o.value === selected.value) {
      return null;
    }
    return (
      <div key={o.value} className="item" onClick={() => onSelectedChange(o)}>
        {o.label}    
      </div>
    )
  })

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active': ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open? 'visible transition': ''}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown