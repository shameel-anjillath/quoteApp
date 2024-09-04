import { useState } from 'react'
import './random.css'
const RandomQuote = () => {
    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://api.quotable.io/quotes/random")
        quotes = await response.json()
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(select)
    }

    const [quote, setQuote] = useState({
        content: "Remember I will be always with you forever",
        author: "Soulmate rash"
    })

    loadQuotes()
    return (
        <div className='container'>
            <div className="quote">{quote.content}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">{quote.author}</div>
                    <dic className="icons">
                        <i class="bi bi-arrow-clockwise" onClick={() => { random() }}></i>
                    </dic>
                </div>
            </div>
        </div>
    )
}

export default RandomQuote
