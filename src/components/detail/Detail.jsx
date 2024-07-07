import React from 'react'
import "./Detail.css"


function Detail() {
    return (
        <div className='detail'>
            <div className="user">
                <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" srcset="" />
                <h2>Sif eddine</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Settings chat</span>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25637.png" alt="" srcset="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25637.png" alt="" srcset="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" srcset="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://fr.hespress.com/wp-content/uploads/2024/05/wac_carte_maroc1.jpg" alt="" srcset="" />
                                <span>photo.png</span>
                            </div>
                            <img src="https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-vector-download-icon-png-image_967111.jpg" className='icon' alt="" srcset="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://fr.hespress.com/wp-content/uploads/2024/05/wac_carte_maroc1.jpg" alt="" srcset="" />
                                <span>photo.png</span>
                            </div>
                            <img src="https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-vector-download-icon-png-image_967111.jpg" className='icon' alt="" srcset="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://fr.hespress.com/wp-content/uploads/2024/05/wac_carte_maroc1.jpg" alt="" srcset="" />
                                <span>photo.png</span>
                            </div>
                            <img src="https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-vector-download-icon-png-image_967111.jpg" className='icon' alt="" srcset="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://fr.hespress.com/wp-content/uploads/2024/05/wac_carte_maroc1.jpg" alt="" srcset="" />
                                <span>photo.png</span>
                            </div>
                            <img src="https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-vector-download-icon-png-image_967111.jpg" className='icon' alt="" srcset="" />
                        </div>
                      
                      
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared files</span>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25637.png" alt="" srcset="" />
                    </div>
                </div>
                <div className='bottom'>
                <button className='blockButton'>Block User</button>
                <button className='logoutButton'>LogOut</button>
                </div>
            </div>
        </div>
    )
}

export default Detail
