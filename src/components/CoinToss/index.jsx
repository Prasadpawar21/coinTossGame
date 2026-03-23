// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHead: true, totalCount: 0, headsCount: 0, tailsCount: 0}

  clickingTossButton = () => {
    const temp = Math.floor(Math.random() * 2)
    const isResultHead = temp === 0
    this.setState(prevState => ({
      isHead: isResultHead,
      totalCount: prevState.totalCount + 1,
      headsCount: isResultHead
        ? prevState.headsCount + 1
        : prevState.headsCount,
      tailsCount: isResultHead
        ? prevState.tailsCount
        : prevState.tailsCount + 1,
    }))
  }

  render() {
    const {isHead, totalCount, headsCount, tailsCount} = this.state

    const tossImg = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para1">Heads (or) Tails</p>
          <img src={tossImg} alt="toss result" className="toss-image" />
          <button
            type="button"
            onClick={this.clickingTossButton}
            className="button"
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="para">Total:{totalCount}</p>
            <p className="para">Heads:{headsCount}</p>
            <p className="para">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
