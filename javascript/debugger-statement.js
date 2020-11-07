[1, 2, 3]
  .map(n => n ** n)
  .filter(n => {
    const isMoreThan5 = n > 5;
    debugger;
    return isMoreThan5;
  });
