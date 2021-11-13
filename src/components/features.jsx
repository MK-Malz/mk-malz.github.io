export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Introduction</h2>
            <div>
              <p>
                Here are four ideas that you probably already agree with. Three are about your values, and one is an observation about the world. Individually, they each might seem a bit trite or self-evident. But taken together, they have significant implications for how we think about doing good in the world. (Source: <a href="https://www.givingwhatwecan.org/post/2016/03/four-things-you-already-agree-with-effective-altruism/" target="_blank">givingwhatwecan.org</a>)
              </p>
          </div>
        </div>
        
        <div className='row'>

          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
