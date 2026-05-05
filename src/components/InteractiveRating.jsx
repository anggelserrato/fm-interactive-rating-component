import { useState } from 'react';
import iconStar from '../assets/icon-star.svg';
import iconSuccess from '../assets/illustration-thank-you.svg';

const STEPS = [1, 2, 3, 4, 5];

function InteractiveRating() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedRating) {
      setIsSubmitted(true);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {!isSubmitted ? (
        <article className="flex w-[90%] max-w-[412px] flex-col gap-300 rounded-[21px] bg-gradient-primary px-300 py-400 text-white">
          <figure className="flex h-500 w-500 items-center justify-center rounded-full bg-grey-900">
            <img
              src={iconStar}
              alt="Icon of a star"
              className="h-200 w-200"
              loading="eager"
            />
          </figure>
          <section className="flex flex-col gap-200">
            <h1 className="text-preset-2">How did we do?</h1>
            <p className="text-preset-5-regular text-grey-500">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <ul className="flex flex-row items-center justify-between text-center">
              {STEPS.map((step) => (
                <li key={step} className="h-500 w-500">
                  <button
                    onClick={() => setSelectedRating(step)}
                    className={`flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-grey-900 text-preset-5-bold tracking-normal text-grey-500 transition-colors duration-200 ${selectedRating === step ? 'bg-orange-500 text-white' : 'hover:bg-white hover:text-grey-950'} outline-offset-2 outline-orange-500 focus-visible:outline-2`}
                  >
                    {step}
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <button
            onClick={handleSubmit}
            disabled={!selectedRating}
            className="cursor-pointer rounded-[23px] bg-orange-500 py-200 text-preset-5-bold text-grey-950 outline-offset-2 outline-white transition-colors duration-200 hover:bg-white hover:text-grey-950 focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-orange-500 disabled:hover:text-grey-950"
          >
            SUBMIT
          </button>
        </article>
      ) : (
        <article className="flex w-[90%] max-w-[412px] flex-col justify-center gap-300 rounded-[21px] bg-gradient-primary px-300 py-400 text-center text-white">
          <figure className="flex items-center justify-center">
            <img
              src={iconSuccess}
              alt="Success icon"
              className="h-auto w-[205px]"
            />
          </figure>
          <p className="w-fit self-center rounded-[22px] bg-grey-900 px-200 py-100 text-preset-5-regular text-orange-500">
            You selected {selectedRating} out of 5
          </p>
          <div className="flex flex-col gap-200">
            <p className="text-preset-2">Thank you!</p>
            <p className="text-preset-5-regular text-grey-500">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </article>
      )}
    </main>
  );
}

export default InteractiveRating;
