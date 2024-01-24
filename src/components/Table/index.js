import { connect } from 'react-redux'

import { Table as Self } from './Table'
import { showModal } from 'redux/actions/modal'
import { switchCourse } from 'redux/actions/groups'

const mapDispatchToProps = {
	showModal,
	switchCourse
}

export const Table = connect(null, mapDispatchToProps)(Self)