import { connect } from 'react-redux'

import { NationalitiesPage as Self } from './NationalitiesPage'
import { loadNationalities, deleteNationality } from 'redux/actions/nationalities'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ nationalities }) => ({
  nationalities
})

const mapDispatchToProps = {
  showModal,
  loadNationalities,
  deleteNationality
}

export const NationalitiesPage = connect(mapStateToProps, mapDispatchToProps)(Self)