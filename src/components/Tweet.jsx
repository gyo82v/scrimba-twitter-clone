import { FaHeart } from 'react-icons/fa';
import { FaRetweet } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';

export default function Tweet({data}){
    const container = `flex`
    const img = `rounded-full w-14 h-14`
    const infoSetion = ``
    const handle = ``
    const tweetText = ``
    const btnContainer = `flex`
    const btnSection = ``
    const btn = ``
    const icon = ``
    const amount = ``
    return(
        <section className={container}>
            <img src={data.profilePic} alt="avatar" className={img} />
            <section className={infoSetion}>
                <p className={handle}>{data.handle}</p>
                <p className={tweetText}>{data.tweetText}</p>
                <div className={btnContainer}>
                    <span className={btnSection}>
                        <button className={btn}><FaRegCommentDots /></button>
                        <p className={amount}></p>
                    </span>
                    <span className={btnSection}>
                        <button className={btn}><FaHeart /></button>
                        <p className={amount}></p>
                    </span>
                    <span className={btnSection}>
                        <button className={btn}><FaRetweet /></button>
                        <p className={amount}></p>
                    </span>
                </div>
            </section>
        </section>
    )
}