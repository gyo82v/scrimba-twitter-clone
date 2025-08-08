import { FaHeart } from 'react-icons/fa';
import { FaRetweet } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';

export default function Tweet({data, like, retweet, reply }){
    const {handle, likes, retweets, profilePic, tweetText, isLiked, isRetweeted, isReply, replies} = data
    //tailwind styles
    const container = `flex gap-2 py-4 pl-2 pr-6 text-neutral-700 w-full
                       shadow-lg shadow-neutral-800/30 rounded-lg bg-neutral-50`
    const btnSection = `flex flex-1 `
    const icon = `h-6 w-6 hover:transform hover:scale-115 active:scale-90 mr-1`
    const repliesIcon = `${isReply ? "text-blue-500" : "text-neutral-500"}`
    const heartIcon = `${isLiked ? "text-rose-500" : "text-neutral-500"}`
    const retweetIcon = `${isRetweeted ? "text-lime-500" : "text-neutral-500"}`
    const replyContainer = `flex items-center gap-2 mt-3 border-t border-neutral-300 py-3`
    //

    const repliesArray = replies.map((r, i) => (
        <div className={replyContainer} key={i}>
            <img src={r.profilePic} alt='avatar' className="w-18 h-18 rounded-full" />
            <div className="flex flex-col gap-2">
                <p className="text-sm">{r.handle}</p>
                <p className="font-semibold">{r.tweetText}</p>
            </div>
        </div>
    ))

    return(
        <section className={container}>
            <img src={profilePic} alt="avatar" className="rounded-full w-18 h-18" />
            <section className="flex flex-col w-full">
                <p className="text-sm">{handle}</p>
                <p className="mb-4 mt-2 font-semibold">{tweetText}</p>
                <div className="flex gap-3 w-10/12">
                    <span className={btnSection}>
                        <button onClick={reply} disabled={replies.length < 1} aria-label="manage comments">
                            <FaRegCommentDots className={`${icon} ${repliesIcon}`} />
                        </button>
                        <p>{replies.length}</p>
                    </span>
                    <span className={btnSection}>
                        <button onClick={like} aria-label="Manage likes">
                            <FaHeart className={`${icon} ${heartIcon}`}/>
                        </button>
                        <p>{likes}</p>
                    </span>
                    <span className={btnSection}>
                        <button onClick={retweet} aria-label="manage retweets">
                            <FaRetweet className={`${icon} ${retweetIcon}`}/>
                        </button>
                        <p>{retweets}</p>
                    </span>
                </div>
                {isReply && repliesArray}
            </section>
        </section>
    )
}