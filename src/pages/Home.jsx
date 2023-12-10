import React from 'react'
import Header from '../components/Header'
import KeyBoard from '../components/KeyBoard/KeyBoard'
import SwitchButtons from '../components/SwitchButtons/SwitchButtons'
import KeyType from '../components/KeyBoard/KeyType'

const Home = () => {
    return (
        <>
            <div id="wrapper">
                <Header />
                <main id="main">
                    {/* <Tools /> */}

                    <section className='keyboard_section'>
                        <SwitchButtons />
                        <KeyBoard />
                    </section>

                    <KeyType />


                    <section className="text">
                        <div className="container">
                            <p>The site administration disclaims responsibility for any actions and manipulations carried out by
                                users. Users engage in all keyboard-related activities at their own risk. Whether you wish to
                                assess the functionality of your keyboard, troubleshoot a malfunctioning one, or improve your
                                typing speed, our Keyboard Test Online tool is at your disposal. If you are experiencing issues
                                with key responsiveness or facing difficulties in accurate typing, worry no more!</p>
                            <p>Our market-leading key test tool allows you to manually test each key, identifying issues such as
                                stuck keys or typing flow interruptions. If you've noticed your keyboard skipping words during
                                regular use, this tool can help diagnose the underlying problems swiftly.</p>
                            <p>Utilize our online keyboard testing service to evaluate your keyboard's health quickly and
                                efficiently. The best part? It's entirely free of charge, with no need for any software
                                installation. Experience the convenience of testing keystrokes online without any complications.
                            </p>
                            <p>The tool is designed for user-friendly operation, eliminating the need for extensive
                                instructions. Simply follow a few straightforward steps to test buttons using our online
                                keyboard keys tool.</p>
                            <p>To test your keyboard, start pressing keys, and each keypress will be highlighted on our online
                                keyboard. If a key does not light up, it indicates that the corresponding key on your physical
                                keyboard is not functioning. It's that easy to perform an online key test!</p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Home
