import React from 'react'
import Image1 from '../../assets/img1.jpg'
import Image2 from '../../assets/img2.jpeg'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const About = () => {
    return (
        <div
            style={{
                backgroundColor: "#060710",
                color: "#fff",
                padding: "50px",
                fontFamily: "Arial, sans-serif",
                width: "100%"
            }}
        >
            <header className="text-center">
                <h1 className="text-gray-500 text-2xl">About Project Management System</h1>
                <p style={{ fontSize: "18px", marginTop: "10px" }}>
                    Our Project Management System is designed to streamline team collaboration, task management, and project
                    tracking. With an intuitive interface and powerful features, this application is your perfect companion
                    for managing projects efficiently.
                </p>
            </header>

            <section
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "80px",
                    gap: "40px",
                    flexWrap: "wrap", // Enables wrapping for small screens
                }}
            >
                {/* Member 1 */}
                <div
                    style={{ textAlign: "center", width: "90%", maxWidth: "300px" }}
                    className="bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5"
                >
                    <img
                        src={Image1}
                        alt="Member 1"
                        style={{
                            borderRadius: "50%",
                            width: "150px",
                            height: "150px",
                            margin: "0 auto",
                        }}
                    />
                    <h3 style={{ marginTop: "10px" }}>Chandan Kumar</h3>
                    <p>Full Stack Developer</p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            marginTop: "10px",
                            flexWrap: "wrap",
                        }}
                    >
                        <a href="https://www.linkedin.com/in/chandan-kumar0/" target="_blank" rel="noopener noreferrer">
                            <Avatar>
                                <AvatarFallback>
                                    <LinkedInLogoIcon />
                                </AvatarFallback>
                            </Avatar>
                        </a>
                        <a href="https://github.com/Chandan5800" target="_blank" rel="noopener noreferrer">
                            <Avatar>
                                <AvatarFallback>
                                    <GitHubLogoIcon />
                                </AvatarFallback>
                            </Avatar>
                        </a>
                        <a href="https://x.com/Chandan5800" target="_blank" rel="noopener noreferrer">
                            <Avatar>
                                <AvatarFallback>
                                    <TwitterLogoIcon />
                                </AvatarFallback>
                            </Avatar>
                        </a>
                        <a href="https://www.instagram.com/chandan61006/?hl=en" target="_blank" rel="noopener noreferrer">
                            <Avatar>
                                <AvatarFallback>
                                    <InstagramLogoIcon />
                                </AvatarFallback>
                            </Avatar>
                        </a>
                    </div>
                </div>

                {/* Member 2 */}
                <div
                    style={{ textAlign: "center", width: "90%", maxWidth: "300px" }}
                    className="bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5"
                >
                    <img
                        src={Image2}
                        alt="Member 2"
                        style={{
                            borderRadius: "50%",
                            width: "150px",
                            height: "150px",
                            margin: "0 auto",
                        }}
                    />
                    <h3 style={{ marginTop: "10px" }}>Md. Danish Ansari</h3>
                    <p>Full Stack Developer</p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            marginTop: "10px",
                            flexWrap: "wrap",
                        }}
                    >
                        <a href="https://www.linkedin.com/in/mddanish06/" target="_blank" rel="noopener noreferrer">
                            <Avatar>
                                <AvatarFallback>
                                    <LinkedInLogoIcon />
                                </AvatarFallback>
                            </Avatar>
                        </a>
                        <a href="https://github.com/mddanish06" target="_blank" rel="noopener noreferrer">
                            <Avatar>
                                <AvatarFallback>
                                    <GitHubLogoIcon />
                                </AvatarFallback>
                            </Avatar>
                        </a>
                        <a href="https://twitter.com/danishhh0611" target="_blank" rel="noopener noreferrer">
                            <Avatar>
                                <AvatarFallback>
                                    <TwitterLogoIcon />
                                </AvatarFallback>
                            </Avatar>
                        </a>
                        <a href="https://www.instagram.com/this_is_danish._/" target="_blank" rel="noopener noreferrer">
                            <Avatar>
                                <AvatarFallback>
                                    <InstagramLogoIcon />
                                </AvatarFallback>
                            </Avatar>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
