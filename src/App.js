import './App.css'

import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const HistoryItem = props => {
  const {eventFunc, logDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = logDetails
  const removeLog = () => {
    eventFunc(id)
  }
  return (
    <li className="log-data">
      <p className="time">{timeAccessed}</p>
      <div className="log-bar">
        <div className="log-details">
          <img className="log-icon" alt="domain logo" src={logoUrl} />
          <p className="log-name">{title}</p>
          <p className="log-site">{domainUrl}</p>
        </div>
        <button
          className="del-btn"
          type="button"
          testId="delete"
          onClick={removeLog}
        >
          <img
            className="del-logo"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

// Replace your code here
class App extends Component {
  state = {
    searchValue: '',
    detailsList: initialHistoryList,
  }

  onDeleteBtn = id => {
    const {detailsList} = this.state
    const removeLog = detailsList.filter(eachId => eachId.id !== id)
    this.setState({
      detailsList: removeLog,
    })
  }

  onSearchInput = event => {
    const inValue = event.target.value
    this.setState({
      searchValue: inValue,
    })
  }

  render() {
    const {searchValue, detailsList} = this.state
    const filterData = detailsList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchValue),
    )

    const lenData = filterData.length
    const res = lenData === 0
    return (
      <div className="bg-layer">
        <nav className="navbar">
          <ul className="nav-items">
            <li className="logo">
              <img
                className="app-logo"
                alt="app logo"
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              />
            </li>
            <li className="search-bar">
              <img
                className="search-logo"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
              <input
                className="search-input"
                type="search"
                placeholder="Search history"
                onChange={this.onSearchInput}
                value={searchValue}
              />
            </li>
          </ul>
        </nav>
        <div className="body">
          {res ? (
            <p className="er-msg">There is no history to show</p>
          ) : (
            <ul className="site-list">
              {filterData.map(eachLog => (
                <HistoryItem
                  key={eachLog.id}
                  eventFunc={this.onDeleteBtn}
                  logDetails={eachLog}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
