import { combineReducers } from 'redux';

import { app } from './app';
import { auth } from './auth';
import { users } from './users';
import { modal } from './modal';
import { groups } from './groups';
import { profile } from './profile';
import { regions } from './regions';
import { investments } from './investments';
import { investors } from './investors';
import { products } from './products';
import { treatments } from './treatments';
import { students } from './students';
import { commands } from './commands';
import { credits } from './credits';
import { targets } from './targets';
import { privileges } from './privileges';
import { professions } from './professions';
import { communities } from './communities';
import { customers } from './customers';
import { expenses } from './expenses';
import { sales } from './sales';
import { commissariats } from './commissariats';
import { nationalities } from './nationalities';
import { healthStatuses } from './healthStatuses';
import { commandsHistory } from './commandsHistory';
import { measurementUnits } from './measurementUnits';

export const rootReducer = combineReducers({
	app,
	auth,
	users,
	modal,
	sales,
	groups,
	regions,
	credits,
	targets,
	profile,
	expenses,
	commands,
	students,
	products,
	customers,
	investors,
	privileges,
	treatments,
	professions,
	investments,
	communities,
	commissariats,
	nationalities,
	healthStatuses,
	commandsHistory,
	measurementUnits,
});
