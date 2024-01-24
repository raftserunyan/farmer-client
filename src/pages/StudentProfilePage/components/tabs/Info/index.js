import { connect } from 'react-redux'

import { Info as Self } from './Info'

const mapStateToProps = ({ profile }) => ({
  profileData: profile.data
})

export const Info = connect(mapStateToProps)(Self)