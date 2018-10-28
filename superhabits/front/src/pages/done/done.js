import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => (state.habit)

const Done = ({habits}) => {
  console.log('done list without filter ',habits)
  return (
    <div>
      list of habits done
    </div>
  )
}

export default connect(mapStateToProps)(Done)
