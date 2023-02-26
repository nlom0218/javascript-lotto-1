import { $ } from '../dom/dom';

const renderStatistics = (rankings, rewardRate) => {
  const lottoRewards = [
    [5, '3개', '5,000'],
    [4, '4개', '50,000'],
    [3, '5개', '1,500,000'],
    [2, '5개+보너스볼', '30,000,000'],
    [1, '6개', '2,000,000,000'],
  ];

  $('#winning-statistics').innerHTML = `
  <div id="winning-statistics-layout">
    <div id="winning-statistics-wapper">
      <div id="winning-statistics-out-button">ｘ</div>
      <div id="winning-statistics-title">🏆 당첨 통계 🏆</div>
      <table>
        <th>일치 갯수</th>
	      <th>당첨금</th>
	      <th>당첨 갯수</th>
          ${lottoRewards
            .map(([rank, matchCount, reward]) => {
              const count = rankings.filter((ranking) => ranking === rank).length;
              return `
                <tr>
                    <td class="text">${matchCount}</td>
                    <td class="text">${reward}</td>
                    <td class="text">${count}개</td>
                </tr>
            `;
            })
            .join('')}
      </table>
      <div id="winning-statistics-reward-rate">당신의 총 수익률은 ${rewardRate}입니다.</div>
      <button class="button-basic">다시 시작하기</button>
    </div>
  </div>
  `;
};

export default renderStatistics;
