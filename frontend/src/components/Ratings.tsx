import React from 'react';

type Props = {
  value: number;
  text: string;
  color?: string;
};

const stars = [1, 2, 3, 4, 5];

const Ratings = ({ color = '#f8e825', value, text }: Props) => {
  return (
    <div className='rating'>
      {stars.map((star) => (
        <span key={star}>
          <i
            style={{ color }}
            className={
              value >= 1 + star - 1
                ? 'fas fa-star'
                : value >= 0.5 + star - 1
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }></i>
        </span>
      ))}
      <span className='mx-2'>{text}</span>
    </div>
  );
};

export default Ratings;
