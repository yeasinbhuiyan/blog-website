
import './App.css'
import Banner from './Component/Blogs/Banner/Banner'
import Blog from './Component/Blogs/Blog'
import Jobs from './Component/Jobs/Jobs'
import NewsFeeds from './Component/NewsFeeds.jsx/NewsFeeds'
import UpcommingEvents from './Component/UpcommingEvents/UpcommingEvents'
import Footer from './Shared/Footer'
import NavigationBar from './Shared/NavigationBar'

function App() {

  return (
    <>
      <div>
        <NavigationBar></NavigationBar>
        {/* Banner */}
        <Banner></Banner>
        {/* blog section */}
        <Blog></Blog>

        {/* News Feed */}

        <NewsFeeds></NewsFeeds>
        {/*  Upcommings Events */}

        <UpcommingEvents></UpcommingEvents>

        {/* Jobs section */}

<Jobs></Jobs>



        <Footer></Footer>

      </div>
    </>
  )
}

export default App
