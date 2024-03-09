export const differenceDays = (strg) => {
  // Future date
  const futureDate = new Date(strg);

  // Today's date
  const today = new Date();

  // Calculate the difference in milliseconds
  const differenceMs = futureDate - today;

  // Convert milliseconds to days
  return Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
};

export const sortArray = (arr, param, direction = "asc") => {
  const modifier = direction === "asc" ? 1 : -1;
  return arr.sort((a, b) => {
    if (a[param] < b[param]) {
      return -1 * modifier;
    }
    if (a[param] > b[param]) {
      return modifier;
    }
    return 0;
  });
};

export const refactorData = (data) => {
  return data.map((item) => {
    const {
      Name,
      Extension,
      ExtensionDate,
      AssumedAgeInDays,
      InvestigatingJudgeAction,
      ImprisonmentDepositDate,
      CriminalStatus,
      Charge,
    } = item;
    return {
      Name,
      Extension,
      ExtensionDate,
      AssumedAgeInDays,
      InvestigatingJudgeAction,
      ImprisonmentDepositDate,
      CriminalStatus,
      Charge,
    };
  });
};
