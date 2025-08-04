import { useState } from "react"
import {tweetsData} from "./data.js"

import Tweet from "./components/Tweet"


function App() {
  const [text, setText] = useState("")
  const [tweets, setTweets] = useState(tweetsData)

  // tailwind styles
    const container = `flex flex-col p-3 w-11/12 items-center`
    const title = `text-2xl font-bold text-sky-500 mr-auto`
    const header = `w-11/12`
    const input = `border border-neutral-800 w-full rounded-lg shadow-lg shadow-neutral-800/30
                   my-3 p-2 
                   focus:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-sky-500
                   focus:ring-offset-white focus:text-neutral-900 focus:font-semibold
                   transition-colors duration-200 ease-in-out`
    const btnTweet = `bg-gradient-to-br from-sky-500 to-sky-400 text-neutral-50 font-bold
                      rounded-full shadow-lg shadow-neutral-800/30 py-3 px-5 text-lg 
                      hover:transform hover:scale-105 active:scale-95 w-full`
    const main = ``

  //

  const tweetsArray = tweets.map(t => (
    <Tweet data={t} key={t.uuid}/>
  ))

  

  const handleChange = e => setText(e.target.value) 
  const handleClick = () => console.log(text)

  return (
   <div className={container}>
    <h1 className={title}>Twitter</h1>
    <header className={header}>
      <textarea
        rows={5}
        className={input}
        value={text}
        onChange={handleChange} 
        aria-label="Write your tweet here"
        placeholder="Write your tweet here..."></textarea>
      <button className={btnTweet} onClick={() => handleClick()}>Tweet</button>
    </header>
    <main className={main}>
      {tweetsArray}
    </main>
   </div>
  )
}

export default App
