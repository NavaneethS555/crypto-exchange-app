import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const data = {
    labels: [
        'T1',
        'T2',
        'T3',
        'T4',
        'T5',
        'T6',
        'T7',
        'T8',
        'T9',
        'T10',
    ],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#FFFF00',
            borderColor: '#FFFF00',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#FFFF00',
            pointBackgroundColor: '#FFFF00',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#FF7F50',
            pointHoverBorderColor: '#FF7F50',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 0.076125, 25, 60, 110, 108, 106, 104, 103, 96],
        },
    ],
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
}

const BalanceChart = () => {
    return (
        <Wrapper>
            <Line data={data} options={options} width={400} height={150} />
        </Wrapper>
    )
}

export default BalanceChart

const Wrapper = styled.div``