export const calculateGains = (holdings) => {
  let shortTerm = { profit: 0, loss: 0 };
  let longTerm = { profit: 0, loss: 0 };

  holdings.forEach((h) => {
    if (h.shortTermGain >= 0) {
      shortTerm.profit += h.shortTermGain;
    } else {
      shortTerm.loss += Math.abs(h.shortTermGain);
    }

    if (h.longTermGain >= 0) {
      longTerm.profit += h.longTermGain;
    } else {
      longTerm.loss += Math.abs(h.longTermGain);
    }
  });

  const net =
    shortTerm.profit - shortTerm.loss +
    longTerm.profit - longTerm.loss;

  const effective = net; // Adjust this calculation based on your specific definition of effective capital gain

  return {
    shortTerm,
    longTerm,
    net,
    effective,
  };
};








/*
export const calculateGains = (holdings) => {
  let shortTerm = { profit: 0, loss: 0 };
  let longTerm = { profit: 0, loss: 0 };

  holdings.forEach((h) => {
    if (h.shortTermGain >= 0) {
      shortTerm.profit += h.shortTermGain;
    } else {
      shortTerm.loss += Math.abs(h.shortTermGain);
    }

    if (h.longTermGain >= 0) {
      longTerm.profit += h.longTermGain;
    } else {
      longTerm.loss += Math.abs(h.longTermGain);
    }
  });

  const net =
    shortTerm.profit - shortTerm.loss +
    longTerm.profit - longTerm.loss;

  return {
    shortTerm,
    longTerm,
    net,
  };
};
*/





/*
export const calculateGains = (holdings) => {
  let profits = 0;
  let losses = 0;

  holdings.forEach((h) => {
    const gain = h.shortTermGain + h.longTermGain;
    if (gain >= 0) profits += gain;
    else losses += Math.abs(gain);
  });

  return {
    profits,
    losses,
    net: profits - losses,
  };
};
*/