export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Doing <span style={{color: "orange"}}> Good</span>  <br />Together <br /><span style={{color: "orange"}}>Düsseldorf</span>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Introduction
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About us
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Activities
              </a>
            </li>
            {/*
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            */}
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
         
        </div>
      </div>
       <br />
    </nav>
  )
}
