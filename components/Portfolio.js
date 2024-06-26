import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { coins } from '../static/coins'
import Coin from './Coin'
import BalanceChart from './BalanceChart';

const Portfolio = (thirdWebTokens, sanityTokens, walletAddress) => {
  const [walletBalance, setWalletBalance] = useState(0)
  const tokenToINR = {}
  for(const token in sanityTokens) {
    tokenToINR[token.contactAddress] = Number(token.inrPrice)
  }
  useEffect(() => {
    const calculateTotalBalance = async () => {
      const totalBalance = await Promise.all(
        Array.from(thirdWebTokens).map(async token => {
          const balance = await token.balanceOf(walletAddress)
          console.log(balance)
          return Number(balance.displayValue) * tokenToINR[token.address]
        })
      )
      setWalletBalance(totalBalance.reduce((acc, curr) => acc + curr, 0))
    }
    calculateTotalBalance()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thirdWebTokens, sanityTokens])

  return (
    <Wrapper>
      <Content>
        <Chart>
          <div>
            <Balance>
              <h1>Transactions Graph</h1>
            </Balance>
          </div>
          <BalanceChart />
        </Chart>
        <PortfolioTable>
          <TableItem>
            <Title>Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 6 }}>Name</div>
                <div style={{ flex: 5.1 }}>Current Price</div>
                <div style={{ flex: 4.2 }}>Total Value (In Millions)</div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {coins.map(coin => (
                // eslint-disable-next-line react/jsx-key
                <div>
                  <Coin coin={coin} />
                  <Divider />
                </div>
              ))}
            </div>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
`
const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`

const Balance = styled.div``

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`

const Table = styled.div`
  width: 100%;
`

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > th {
    text-align: left;
  }
`

const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`