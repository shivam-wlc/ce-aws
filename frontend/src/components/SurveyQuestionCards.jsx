import React, { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";
import Select from "react-select";

import styles from "../styles/QuestionCard.module.css";
import globalStyle from "../styles/Questions.module.css";

const SurveyQuestionCards = ({
  questionNumber,
  questionStatment,
  questionOptions,
  isMultiple,
  answerKey,
  totalQuestions,
  onNext,
  onPrevious,
  isLastQuestion,
  isFirstQuestion,
  overallAnswers,
  setOverallAnswers,
  handleSubmit,
}) => {
  const [optionValue, setOptionValue] = useState(null);
  const circleValues = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleNext = () => {
    let processedOptionValue;
    if (isMultiple) {
      processedOptionValue = optionValue.map((value) => value.value);
    } else processedOptionValue = optionValue.value;
    const updatedOverallAnswer = overallAnswers.filter((ans) => !ans.hasOwnProperty(answerKey));
    updatedOverallAnswer.push({ [answerKey]: processedOptionValue });
    setOverallAnswers(updatedOverallAnswer);
    setOptionValue(null);
    isLastQuestion ? handleSubmit(updatedOverallAnswer) : onNext(updatedOverallAnswer);
  };

  const handlePrevious = () => {
    onPrevious();
  };

  return (
    <>
      <div className={globalStyle["questions-container"]}>
        <div className={styles["top-subcard"]}>
          <div className={styles.cardTitle}>Educational Survey</div>
          <div className={styles.questionContainer}>
            <p className={styles.questionText}>
              {`Q${questionNumber}. `}
              {questionStatment}
            </p>
          </div>
          <ul className={styles.status}>
            {circleValues.map((value, index) => (
              <li
                key={index}
                className={`${styles.statusCircle} ${questionNumber >= index + 1 ? styles.statusCircleActive : styles.statusCircleInactive}`}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.selectContainer}>
          <Select
            options={questionOptions}
            value={optionValue}
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: "#f8f4f4",
                width: "100%",
              }),
              container: (provided) => ({
                ...provided,
                width: "90%",
              }),
            }}
            onChange={(selectedOption) => {
              setOptionValue(selectedOption);
            }}
            isMulti={isMultiple}
          />
        </div>
      </div>
      <div className={globalStyle["navButtonContainer"]}>
        <button className={globalStyle["navButton"]} onClick={handlePrevious} disabled={isFirstQuestion}>
          <span>
            <IoMdArrowRoundBack />
          </span>
          Previous
        </button>
        <button className={globalStyle["navButton"]} onClick={handleNext} disabled={!optionValue}>
          {isLastQuestion ? "Submit" : "Next"}
          <span>
            <GrLinkNext />
          </span>
        </button>
      </div>
    </>
  );
};

export default SurveyQuestionCards;
