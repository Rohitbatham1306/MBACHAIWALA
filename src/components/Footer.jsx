import React from 'react'

const linkbackonormal = (element) => {

    const allfooterlinks = document.querySelectorAll(".footerlinks")


    allfooterlinks.forEach((item) => (item.style.opacity = 1))



}
const Footer = () => {

    const foooterlinks = (element) => {
        const allfooterlinks = document.querySelectorAll(".footerlinks")

        switch (element) {
            case 0:
                allfooterlinks.forEach((item, index) => index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))

                break;
            case 1:
                allfooterlinks.forEach((item, index) => index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))

                break;
            case 2:
                allfooterlinks.forEach((item, index) => index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))

                break;
            case 3:
                allfooterlinks.forEach((item, index) => index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))

                break;
            case 4:
                allfooterlinks.forEach((item, index) => index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))

                break;
            case 5:
                allfooterlinks.forEach((item, index) => index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))

                break;

            default:

                allfooterlinks.forEach((item) => (item.style.opacity = 1))

                break;

        }
    }
    return (
        <> <footer>
            <h1> Let's
                <br />
                #connnectOncutting?
            </h1>
            <aside onMouseLeave={linkbackonormal}>
                <a href='/' className='footerlinks' onMouseOver={() => foooterlinks(0)} data-cursorpointermini={true}>Home</a>
                <a href='/story' className='footerlinks' onMouseOver={() => foooterlinks(1)} data-cursorpointermini={true}>Story</a>
                <a href='/media' className='footerlinks' onMouseOver={() => foooterlinks(2)} data-cursorpointermini={true}>Media</a>
                <a href='/franchise' className='footerlinks' onMouseOver={() => foooterlinks(3)} data-cursorpointermini={true}>Franchise</a>
                <a href='/events' className='footerlinks' onMouseOver={() => foooterlinks(4)} data-cursorpointermini={true}>Events</a>
                <a href='/chaiwalacares' className='footerlinks' onMouseOver={() => foooterlinks(5)} data-cursorpointermini={true}>Chai wala cares </a>
            </aside>

            <div>
                <h5>Email</h5>
                <a href="mail to: info@mbachaiwala.com" className='footerlink'> info@mbachaiwala.com</a>
                <a href="mail to: franchise@mbachaiwala.com" className='footerlink'> franchise@mbachaiwala.com</a>
            </div>
            <div>
                <h5>Phone</h5>
                <a href="tel: +917582923622" className='footerlink'>+917582923622</a>
            </div>
            <p> © COPYRIGHT 2023 MBA CHAIWALA. MADE BY   </p>
        </footer>
            <div className="footer"> </div>
        </>
    )
}

export default Footer