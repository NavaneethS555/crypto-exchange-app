import React from 'react'
import styled from 'styled-components'

const Header = ({walletAddress, connectWallet}) => {

  if(document.getElementById('send-button')) {
    document.getElementById('send-button').addEventListener('click', () => {
      let transactionParameters = {
        from: '0xa5D9b9D4a7ABd5023e00Df10C3832FB9A49f6ED9',
        to: '0x848a908419D4B7ebD9fA599abcA1301Ae761288c',
        value: 'DE0B6B3A7640000'
      };
      ethereum.request({ method: 'eth_sendTransaction', params: [transactionParameters] }).then((txHash) => console.log(txHash)).catch((error) => console.error(error));

    });
  }

  return (
    <Wrapper>
      <Title>Profile</Title>
      <ButtonsContainer>
        {walletAddress ? (
          <WalletLink>
            <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
          </WalletLink>
        ) : (
          <Button onClick={() => connectWallet('injected')}>
            Connect Wallet
          </Button>
        )}
        <Button id="send-button" class="btn" style={{ backgroundColor: '#FF7F50', color: '#000' }}>
            Send Crypto
        </Button>
      </ButtonsContainer>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  width: calc(100%);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`
const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`
const ButtonsContainer = styled.div`
  display: flex;
`
const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`
const WalletLink = styled.div`
  font-size: 0.8rem;
  border: 1px solid #282b2f;
  border-radius: 50rem;
  font-size: 1.2rem;
  margin-right: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 600;
`
const WalletAddress = styled.div`
  font-size: 0.8rem;
  /* color: #8a919e; */
`

const Separator = styled.div``

const ProfileIcon = styled.div``