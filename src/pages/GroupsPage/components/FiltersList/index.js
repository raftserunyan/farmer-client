import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadGroups } from 'redux/actions/groups'
import { loadProfessions } from 'redux/actions/professions'

const mapStateToProps = ({ professions }) => ({
  professionsList: professions.list
})

const mapDispatchToProps = {
  loadGroups,
  loadProfessions
}

export const FiltersList = connect(mapStateToProps, mapDispatchToProps)(Self)