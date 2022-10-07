import { useState } from 'react'
import './styles.css'

export function StarRating() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div className="star-rating ml-auto">
      {[...Array(1)].map((star, index) => {
        index += 1
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="margin star-rating flex justify-end">
            {[...Array(5)].map((_star, index) => {
              index += 1
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= (hover || rating) ? 'on' : 'off'}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                  id="botaoTest"
                >
                  <span className="star">&#9733;</span>
                </button>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
