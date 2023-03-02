import { useState } from 'react'
import people from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

const Review = () => {
    const [index, setIndex] = useState(0)
    const { name, job, image, text } = people[index]
    const checkNum = (num) => {
        if (num < 0) {
            return people.length - 1
        }
        if (num >= people.length) {
            return 0
        }
        return num
    }
    const prevPerson = () => {
        setIndex((prevIndex) => {
            const newIndex = prevIndex - 1
            return checkNum(newIndex)
        })
    }
    const nextPerson = () => {
        setIndex((prevIndex) => {
            const newIndex = prevIndex + 1
            return checkNum(newIndex)
        })
    }
    const randPerson = () => {
        let randNum = Math.floor(Math.random() * people.length)
        if (randNum === index) {
            randNum = index + 1
        }
        return setIndex(checkNum(randNum))
    }
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randPerson}>surprise me</button>
        </article>
    )
}

export default Review