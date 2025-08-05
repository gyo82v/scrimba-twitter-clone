import { FaHeart } from 'react-icons/fa';
import { FaRetweet } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';

export default function Tweet({data, like, retweet, isLiked, isRetweeted}){
    const container = `flex gap-2 py-4 pl-2 pr-6 text-neutral-700 w-full
                       shadow-lg shadow-neutral-800/30 rounded-lg bg-neutral-50`
    const img = `rounded-full w-18 h-18`
    const infoSetion = `flex flex-col w-full`
    const handle = `text-sm`
    const tweetText = `mb-4 mt-2 font-semibold`
    const btnContainer = `flex gap-3 w-10/12`
    const btnSection = `flex flex-1 w-`
    const btn = `mr-1 `
    const icon = `h-6 w-6 hover:transform hover:scale-115 active:scale-90`
    const repliesIcon = `text-neutral-500`
    const heartIcon = `${isLiked ? "text-rose-500" : "text-neutral-500"}`
    const retweetIcon = `${isRetweeted ? "text-lime-500" : "text-neutral-500"}`
    const amount = ``
    return(
        <section className={container}>
            <img src={data.profilePic} alt="avatar" className={img} />
            <section className={infoSetion}>
                <p className={handle}>{data.handle}</p>
                <p className={tweetText}>{data.tweetText}</p>
                <div className={btnContainer}>
                    <span className={btnSection}>
                        <button className={btn}><FaRegCommentDots className={`${icon} ${repliesIcon}`} /></button>
                        <p className={amount}>{data.replies.length}</p>
                    </span>
                    <span className={btnSection}>
                        <button className={btn} onClick={like}><FaHeart className={`${icon} ${heartIcon}`}/></button>
                        <p className={amount}>{data.likes}</p>
                    </span>
                    <span className={btnSection}>
                        <button className={btn} onClick={retweet}><FaRetweet className={`${icon} ${retweetIcon}`}/></button>
                        <p className={amount}>{data.retweets}</p>
                    </span>
                </div>
            </section>
        </section>
    )
}