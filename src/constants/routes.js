import { lazy } from 'react';

const InvestmentsPage = lazy(() =>
	import('pages/InvestmentsPage').then(module => ({
		default: module.InvestmentsPage,
	}))
);
const InvestorsPage = lazy(() =>
	import('pages/InvestorsPage').then(module => ({
		default: module.InvestorsPage,
	}))
);
const ProductsPage = lazy(() =>
	import('pages/ProductsPage').then(module => ({
		default: module.ProductsPage,
	}))
);
const TreatmentsPage = lazy(() =>
	import('pages/TreatmentsPage').then(module => ({
		default: module.TreatmentsPage,
	}))
);
const MeasurementUnitsPage = lazy(() =>
	import('pages/MeasurementUnits').then(module => ({
		default: module.MeasurementUnitsPage,
	}))
);
const TargetsPage = lazy(() =>
	import('pages/TargetsPage').then(module => ({
		default: module.TargetsPage,
	}))
);
const CustomersPage = lazy(() =>
	import('pages/CustomersPage').then(module => ({
		default: module.CustomersPage,
	}))
);
const ExpensesPage = lazy(() =>
	import('pages/ExpensesPage').then(module => ({
		default: module.ExpensesPage,
	}))
);
const SalesPage = lazy(() =>
	import('pages/SalesPage').then(module => ({
		default: module.SalesPage,
	}))
);
const CreditsPage = lazy(() =>
	import('pages/CreditsPage').then(module => ({
		default: module.CreditsPage,
	}))
);

export const routes = [
	{
		id: 6,
		path: '/customers',
		isProtected: true,
		component: CustomersPage,
	},
	{
		id: 7,
		path: '/expenses',
		isProtected: true,
		component: ExpensesPage,
	},
	{
		id: 8,
		path: '/investors',
		isProtected: true,
		component: InvestorsPage,
	},
	{
		id: 16,
		path: '/investments',
		isProtected: true,
		component: InvestmentsPage,
	},
	{
		id: 17,
		path: '/products',
		isProtected: true,
		component: ProductsPage,
	},
	{
		id: 18,
		path: '/treatments',
		isProtected: true,
		component: TreatmentsPage,
	},
	{
		id: 19,
		path: '/sales',
		isProtected: true,
		component: SalesPage,
	},
	{
		id: 20,
		path: '/measurement-units',
		isProtected: true,
		component: MeasurementUnitsPage,
	},
	{
		id: 21,
		path: '/targets',
		isProtected: true,
		component: TargetsPage,
	},
	{
		id: 22,
		path: '/credits',
		isProtected: true,
		component: CreditsPage,
	},
];