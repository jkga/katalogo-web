export default function MainHeader () {
  return <>
    <nav className="main-header navbar navbar-expand navbar-light navbar-white">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="fa fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="https://github.com/jkga/katalogo/blob/main/CONTRIBUTING.md" className="nav-link">Contribute</a>
          </li>
          {/*<li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">About</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">Browse All</a>
          </li>*/}
        </ul>
      </div>
    </nav>

    {/*<nav className="main-header navbar navbar-expand" style={{background: 'rgba(240,240,240,0.3)'}}>
      <div className="container"> 
        <ul className="navbar-nav">
          <li className="nav-item">&emsp;&emsp;&emsp;</li>
          {
            'abcdefghijklmnopqrstuvwxyz'.split('').map((el, index)=> {
              return <li className="nav-item d-none d-sm-inline-block">
                <a href="index3.html" className="nav-link">
                  <span className="badge bg-teal">{el}</span>
                </a>
              </li>
            })   
          }
        </ul>
      </div>
        </nav>*/}
  </>
}