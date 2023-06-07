import styled from 'styled-components'

const Promos = () => {
    return (
        <Wrapper>
            <OfferCard>
                <Title>Blockchain</Title>
                <Description>
            A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes.
                </Description>
                <Placeholder />
                <Description>
            For further information please click the link below:
                </Description>
          <Additional style={{ color: '#3773f5' }}>
            <a href="https://en.wikipedia.org/wiki/Blockchain" target="_blank" rel="noopener noreferrer">More Details</a>
          </Additional>
            </OfferCard>

        <OfferCard>
          <Title>Crypto Currencies</Title>
          <Description>
            A cryptocurrency is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority.
          </Description>
          <Placeholder />
          <Description>
            For further information please click the link below:
          </Description>
          <Additional style={{ color: '#3773f5' }}>
            <a href="https://en.wikipedia.org/wiki/Cryptocurrency" target="_blank" rel="noopener noreferrer">More Details</a>
          </Additional>
        </OfferCard>
        </Wrapper>
    )
}

export default Promos

const Wrapper = styled.div`
  margin-top: 4rem;
  padding-right: 1rem;
`

const OfferCard = styled.div`
  width: 21rem;
  height: 20rem;
  border: 1px solid #282b2f;
  margin-bottom: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.9rem;
`

const Description = styled.div`
  font-size: 1.1rem;
`

const Placeholder = styled.div`
  flex: 1;
`

const Additional = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    color: #8a919e !important;
    font-size: 1rem;
  }
`