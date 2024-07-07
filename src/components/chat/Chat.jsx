import React, { useState, useRef, useEffect } from 'react'
import "./Chat.css"
import EmojiPicker from 'emoji-picker-react'


function Chat() {
    const endRef = useRef(null);
    useEffect(()=>{
        endRef.current?.scrollIntoView({behavior: 'smooth'});
    },[])

    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    }
    return (
        <div className='chat'>
            <div className='top'>
                <div className='user'>
                    <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" srcset="" />
                    <div className='texts'>
                        <span>Sif eddine</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='icons'>
                    <img src="https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid" alt="" srcset="" />
                    <img src="https://cdn-icons-png.flaticon.com/512/4503/4503915.png" alt="" srcset="" />
                    <img src="https://cdn-icons-png.flaticon.com/256/64/64159.png" alt="" srcset="" />
                </div>
            </div>


            <div className='center'>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ea minus? Animi accusantium facere voluptatem, hic modi reprehenderit. Impedit esse maiores enim consectetur nobis corporis excepturi quaerat deleniti, accusamus sint!</p>
                        <span>2 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" srcset="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ea minus? Animi accusantium facere voluptatem, hic modi reprehenderit. Impedit esse maiores enim consectetur nobis corporis excepturi quaerat deleniti, accusamus sint!</p>
                        <span>2 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ea minus? Animi accusantium facere voluptatem, hic modi reprehenderit. Impedit esse maiores enim consectetur nobis corporis excepturi quaerat deleniti, accusamus sint!</p>
                        <span>2 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                    <img src="https://fr.hespress.com/wp-content/uploads/2024/05/wac_carte_maroc1.jpg" alt="" srcset="" />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ea minus? Animi accusantium facere voluptatem, hic modi reprehenderit. Impedit esse maiores enim consectetur nobis corporis excepturi quaerat deleniti, accusamus sint!</p>
                        <span>2 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" srcset="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ea minus? Animi accusantium facere voluptatem, hic modi reprehenderit. Impedit esse maiores enim consectetur nobis corporis excepturi quaerat deleniti, accusamus sint!</p>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>


            <div className='bottom'>
                <div className='icons'>
                    <img src="https://static-00.iconduck.com/assets.00/emoji-smile-icon-2048x2048-93ogyjms.png" alt="" />
                    <img src="https://static-00.iconduck.com/assets.00/emoji-smile-icon-2048x2048-93ogyjms.png" alt="" />
                    <img src="https://static-00.iconduck.com/assets.00/emoji-smile-icon-2048x2048-93ogyjms.png" alt="" />
                </div>
                <input type="text"
                    placeholder='Enter something...'
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <div className='emoji'>
                    <img src="https://static-00.iconduck.com/assets.00/emoji-smile-icon-2048x2048-93ogyjms.png" alt="" onClick={() => setOpen((prev) => !prev)} />
                    <div className='picker'>

                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}

export default Chat
