import Nav from './components/Nav'
import NewsItem from './components/NewsItem'
import Article from './components/Article'
import './App.css'

function App() {
 
  return (
    <>
      <Nav>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </nav>
      </Nav>
      <div className="Main">
          <div className="news-list">
            <NewsItem>
              <img src="news-icon.png" alt="News Icon" />
              <p>News Text</p>
              <a href="#">Read More</a>
            </NewsItem>
            <NewsItem>
              <img src="news-icon.png" alt="News Icon" />
              <p>News Text</p>
              <a href="#">Read More</a>
            </NewsItem>
            <NewsItem>
              <img src="news-icon.png" alt="News Icon" />
              <p>News Text</p>
              <a href="#">Read More</a>
            </NewsItem>
          </div>
        <div className="content">
          <Article>
            <h2>Article Title</h2>
            <p>Article Content</p>
          </Article>
          <Article>
            <h2>Article Title</h2>
            <p>Article Content</p>
          </Article>
          <Article>
            <h2>Article Title</h2>
            <p>Article Content</p>
          </Article>
        </div>
      </div>
    </>
  )
}

export default App
