import { useState } from "react"
import {tweetsData} from "./data.js"
import {nanoid} from "nanoid"
import scrimbalogo from "./images/scrimbalogo.png"
import Tweet from "./components/Tweet"


function App() {
  const [text, setText] = useState("")
  const [tweets, setTweets] = useState(tweetsData)

  // tailwind styles
    const container = `flex flex-col p-3 w-11/12 items-center mx-auto `
    const title = `text-3xl font-bold text-sky-500 mr-auto`
    const header = `w-11/12 flex flex-col items-center w-full`
    const input = `border border-neutral-800 w-full rounded-lg shadow-lg shadow-neutral-800/30
                   my-5 p-2 bg-neutral-50
                   focus:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-sky-500
                   focus:ring-offset-white focus:text-neutral-900 focus:font-semibold
                   transition-colors duration-200 ease-in-out`
    const btnTweet = `bg-gradient-to-br from-sky-500 to-sky-400 text-neutral-50 font-bold
                      rounded-full shadow-lg shadow-neutral-800/30 py-3 px-5 text-lg 
                      hover:transform hover:scale-105 active:scale-95 w-full`
    const main = `flex flex-col items-center gap-3 mt-6 w-full`

  //

  const tweetsArray = tweets.map(t => (
    <Tweet 
      data={t} 
      key={t.uuid} 
      like={() => handleLikes(t.uuid)} 
      retweet={() => handleRetweets(t.uuid)}
      reply={() => handleReplies(t.uuid)}
    />
  ))

  const handleLikes = uuid => {
    setTweets(t => t.map(
      t => t.uuid === uuid ? {...t, likes : t.likes + (t.isLiked ? -1 : +1 ), isLiked : !t.isLiked} : t))
  }
  const handleRetweets = uuid => {
    setTweets(t => t.map(
      t => t.uuid === uuid ? {...t, retweets : t.retweets + (t.isRetweeted ? -1 : +1), isRetweeted : !t.isRetweeted} : t))
  }
  const handleReplies = uuid => {
    setTweets(t => t.map(t => t.uuid === uuid ? {...t , isReply : !t.isReply } : t))
  }

  const handleChange = e => setText(e.target.value) 
  const handleClick = () => {
    setTweets(t => [...t, {
      handle: `@modarator`,
      profilePic: scrimbalogo,
      likes: 0,
      retweets: 0,
      tweetText: text,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      isReply: false,
      uuid: nanoid(),
    }])
    setText("")
  }

  return (
   <div className={container}>
    <header className={header}>
      <h1 className={title}>Twitter</h1>
      <textarea
        rows={5}
        className={input}
        value={text}
        onChange={handleChange} 
        aria-label="Write your tweet here"
        placeholder="Write your tweet here..."></textarea>
      <button className={btnTweet} onClick={() => handleClick()} disabled={!text}>Tweet</button>
    </header>
    <main className={main}>
      {tweetsArray}
    </main>
   </div>
  )
}

export default App
