import { HashLink as Link } from 'react-router-hash-link';
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
          <Link className='navbar-brand page-scroll'to='#page-top'>
            Doing <span style={{color: "orange"}}> Good</span>  <br />Together <br /><span style={{color: "orange"}}>Düsseldorf</span>
          </Link>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Link to='#introduction' className='page-scroll'>
                Introduction
  </Link>
            </li>
            <li>
              <Link to='#about' className='page-scroll'>
                About us
              </Link>
            </li>
            <li>
              <Link to='#activities' className='page-scroll'>
                Activities
              </Link>
            </li>
            {/*
            <li>
              <Link to='#portfolio' className='page-scroll'>
                Gallery
              </Link>
            </li>
            
            <li>
              <Link to='#testimonials' className='page-scroll'>
                Testimonials
              </Link>
            </li>
            */}
            <li>
              <Link to='#team' className='page-scroll'>
                Team
              </Link>
            </li>
            <li>
              <Link to='#contact' className='page-scroll'>
                Contact
              </Link>
            </li>
          </ul>
         
        </div>
      </div>
       <br />
    </nav>
  )
}
