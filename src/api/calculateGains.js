export function calculateGains(holdings, selectedCoins) {
    let stcg = 0, ltcg = 0;
    let stcgPost = 0, ltcgPost = 0;

    holdings.forEach(coin => {
        const { stcg: s, ltcg: l } = coin;
        stcg += s.gain;
        ltcg += l.gain;

        if (!selectedCoins.includes(coin.coin)) {
        stcgPost += s.gain;
        ltcgPost += l.gain;
        }
    });

    return {
        before: { stcg, ltcg },
        after: { stcg: stcgPost, ltcg: ltcgPost }
    };
}
