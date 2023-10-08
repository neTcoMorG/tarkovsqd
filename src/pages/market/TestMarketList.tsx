import { MarketListItem } from '../../components/MarketListItem';

import boss from '../../resource/icon/boss.png';

export const TestMarketList = () => {
	return (
		<MarketListItem image={ boss } name={ 'Boss' } quantity={ 1000000 } price={ 10 } />
	);
};