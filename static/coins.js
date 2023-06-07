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
    priceInr: 2240864,
    change: -0.05,
    marketValue: 43516746,
  },
  {
    name: 'Ethereum',
    sign: 'ETH',
    logo: ethLogo,
    priceInr: 156501,
    change: +0.71,
    marketValue: 18926544,
  },
  {
    name: 'Solana',
    sign: 'CRV',
    logo: solLogo,
    priceInr: 1744,
    change: +4.77,
    marketValue: 727904,
  },
  {
    name: 'Polygon',
    sign: 'MATIC',
    logo: maticLogo,
    priceInr: 74.55,
    change: +0.78,
    marketValue: 678767,
  },
  {
    name: 'Dogecoin',
    sign: 'DOGE',
    logo: dogeLogo,
    priceInr: 6.11,
    change: +0.33,
    marketValue: 838345,
  },
]
