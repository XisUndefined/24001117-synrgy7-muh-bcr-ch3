function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // Cara sort car by year descendingly dengan method sort
  // result.sort((a, b) => b.year - a.year);

  // Cara sort car by year descendingly tanpa method sort
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j].year < result[j + 1].year) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
