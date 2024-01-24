import { toast } from 'react-toastify'


import { logout, setAuthData } from './auth'
import { HttpService, StorageService } from 'services'
import { APP_TYPES } from 'redux/types/app'
// import { loadInvestors } from './investors'
// import { loadCommissariats } from './commissariats'
// import { loadData } from './customers'
// import { loadCommunities } from './communities'
// import { loadHealthStatuses } from './healthStatuses'
// import { loadNationalities } from './nationalities'
// import { loadPrivileges } from './privileges'
// import { loadProfessions } from './professions'
// import { loadRegions } from './regions'
// // import { loadStatuses } from './investments'
// import { loadGroups } from './groups'

export const loadAllData = () => dispatch => {
  // dispatch(loadInvestors())
  // dispatch(loadCommissariats())
  // dispatch(loadData())
  // dispatch(loadCommunities())
  // dispatch(loadHealthStatuses())
  // dispatch(loadNationalities())
  // dispatch(loadPrivileges())
  // dispatch(loadProfessions())
  // dispatch(loadRegions())
  // dispatch(loadStatuses())
  // dispatch(loadGroups())
}

export const initApp = () => async dispatch => {
  try {
    const token = StorageService.get('token')

    if (token) {
      // dispatch(loadProfessions())
      console.log(StorageService.get('authData'), 'sd')
      dispatch(setAuthData(StorageService.get('authData')))
    }
  } catch (ex) {
    if (ex.status === 401) {
      toast.info('Ձեր սեսիան ավարտվել է, խնդրում ենք մուտք գործել կրկին')
      dispatch(logout())
    } else {
      toast.error('Առաջացավ խնդիր')
    }
  }

  dispatch({
    type: APP_TYPES.INIT_APP
  })
}

export const setLoading = (loading) => ({
  type: APP_TYPES.SET_LOADING,
  loading
})