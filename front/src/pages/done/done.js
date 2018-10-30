import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = state => (state.habit)

const Done = ({ habits }) => {
  console.log('done list without filter ', habits)
  return (
    <div>
      list of habits done
    </div>
  )
}

Done.propTypes = {
  habits: PropTypes.array
}

export default connect(mapStateToProps)(Done)
