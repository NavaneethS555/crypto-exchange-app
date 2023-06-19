import btcLogo from '../assets/btc.png'
import maticLogo from '../assets/matic.png'
import dogeLogo from '../assets/doge.png'
import ethLogo from '../assets/eth.png'
import solLogo from '../assets/sol.png'

export const coins = [
  {
    name: 'Bitcoin',
    sign: 'BTC',
    logo: btcLogo,
    priceInr: 2171558,
    change: -1.87,
    marketValue: 42110378,
  },
  {
    name: 'Ethereum',
    sign: 'ETH',
    logo: ethLogo,
    priceInr: 140724,
    change: -1.74,
    marketValue: 16903457,
  },
  {
    name: 'Solana',
    sign: 'CRV',
    logo: solLogo,
    priceInr: 1274,
    change: -1.46,
    marketValue: 508511,
  },
  {
    name: 'Polygon',
    sign: 'MATIC',
    logo: maticLogo,
    priceInr: 49.26,
    change: -6.35,
    marketValue: 456845,
  },
  {
    name: 'Dogecoin',
    sign: 'DOGE',
    logo: dogeLogo,
    priceInr: 5.08,
    change: -1.72,
    marketValue: 709786,
  },
]
