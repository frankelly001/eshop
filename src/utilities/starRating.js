export const starRating = (num) => {
  const rateArr = [];

  if (num >= 0 && num <= 5) {
    // <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />
    const fullStar = "fa-solid fa-2x fa-star";
    const halfStar = "fa-solid fa-2x fa-star-half-stroke";
    const emptyStar = "fa-regular fa-2x fa-star";

    // const checkIfDecimal = !!(num % 1);
    const pushStar = (num, starType) => {
      for (let i = 0; i < num; i++) {
        rateArr.push(starType);
      }
    };

    const wholeNum = num - (num % 1);
    const decNum = Math.round(num % 1);

    if (wholeNum) {
      pushStar(wholeNum, fullStar);
    }

    if (decNum) {
      rateArr.push(halfStar); // pushed once bcos decNum value is always 1 "half star" or still the same as calling pushStar(decNum, halfStar);
      pushStar(5 - (wholeNum + decNum), emptyStar);
    }

    if (!decNum) {
      pushStar(5 - (wholeNum + decNum), emptyStar);
    }
  }

  const starArrOfObj = rateArr.length===5 && rateArr.map((el, i) => {return {id: i+1, star: el}})

  return starArrOfObj;
};