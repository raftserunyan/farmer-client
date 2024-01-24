import { lazy } from 'react';

// const GroupsPage = lazy(() =>
//   import('pages/GroupsPage').then((module) => ({ default: module.GroupsPage }))
// );
// const ProfessionsPage = lazy(() =>
//   import('pages/ProfessionsPage').then((module) => ({
//     default: module.ProfessionsPage
//   }))
// );
// const UsersPage = lazy(() =>
//   import('pages/UsersPage').then((module) => ({ default: module.UsersPage }))
// );
// const RegionsPage = lazy(() =>
//   import('pages/RegionsPage').then((module) => ({
//     default: module.RegionsPage
//   }))
// );
// const StudentsPage = lazy(() =>
//   import('pages/StudentsPage').then((module) => ({
//     default: module.StudentsPage
//   }))
// );
const InvestmentsPage = lazy(() =>
  import('pages/InvestmentsPage').then((module) => ({
    default: module.InvestmentsPage
  }))
);
const InvestorsPage = lazy(() =>
  import('pages/InvestorsPage').then((module) => ({
    default: module.InvestorsPage
  }))
);
const ProductsPage = lazy(() =>
  import('pages/ProductsPage').then((module) => ({
    default: module.ProductsPage
  }))
);
const TreatmentsPage = lazy(() =>
  import('pages/TreatmentsPage').then((module) => ({
    default: module.TreatmentsPage
  }))
);
// const PrivilegesPage = lazy(() =>
//   import('pages/PrivilegesPage').then((module) => ({
//     default: module.PrivilegesPage
//   }))
// );
// const CommunitiesPage = lazy(() =>
//   import('pages/CommunitiesPage').then((module) => ({
//     default: module.CommunitiesPage
//   }))
// );
const CustomersPage = lazy(() =>
  import('pages/CustomersPage').then((module) => ({
    default: module.CustomersPage
  }))
);
const ExpensesPage = lazy(() =>
  import('pages/ExpensesPage').then((module) => ({
    default: module.ExpensesPage
  }))
);
const SalesPage = lazy(() =>
  import('pages/SalesPage').then((module) => ({
    default: module.SalesPage
  }))
);
// const CommissariatsPage = lazy(() =>
//   import('pages/CommissariatsPage').then((module) => ({
//     default: module.CommissariatsPage
//   }))
// );
// const NationalitiesPage = lazy(() =>
//   import('pages/NationalitiesPage').then((module) => ({
//     default: module.NationalitiesPage
//   }))
// );
// const HealthStatusesPage = lazy(() =>
//   import('pages/HealthStatusesPage').then((module) => ({
//     default: module.HealthStatusesPage
//   }))
// );
// const CommandsPage = lazy(() =>
//   import('pages/CommandsPage').then((module) => ({
//     default: module.CommandsPage
//   }))
// );
// const StudentProfilePage = lazy(() =>
//   import('pages/StudentProfilePage').then((module) => ({
//     default: module.StudentProfilePage
//   }))
// );
// const CommandsHistoryPage = lazy(() =>
//   import('pages/CommandsHistoryPage').then((module) => ({
//     default: module.CommandsHistoryPage
//   }))
// );

export const routes = [
  // {
  //   id: 101,
  //   path: '/commands-history',
  //   isProtected: true,
  //   component: CommandsHistoryPage
  // },
  // {
  //   id: 1,
  //   path: '/commands',
  //   isProtected: true,
  //   component: CommandsPage
  // },
  // {
  //   id: 2,
  //   path: '/students',
  //   isProtected: true,
  //   component: StudentsPage
  // },
  // {
  //   id: 3,
  //   path: '/student/:studentId',
  //   basePath: '/student',
  //   isProtected: true,
  //   component: StudentProfilePage
  // },
  // {
  //   id: 4,
  //   path: '/professions',
  //   isProtected: true,
  //   component: ProfessionsPage
  // },
  // {
  //   id: 5,
  //   path: '/users',
  //   isProtected: true,
  //   component: UsersPage
  // },
  {
    id: 6,
    path: '/customers',
    isProtected: true,
    component: CustomersPage
  },
  {
    id: 7,
    path: '/expenses',
    isProtected: true,
    component: ExpensesPage
  },
  // {
  //   id: 7,
  //   path: '/health-statuses',
  //   isProtected: true,
  //   component: HealthStatusesPage
  // },
  {
    id: 8,
    path: '/investors',
    isProtected: true,
    component: InvestorsPage
  },
  {
    id: 16,
    path: '/investments',
    isProtected: true,
    component: InvestmentsPage
  },
  {
    id: 17,
    path: '/products',
    isProtected: true,
    component: ProductsPage
  },
  {
    id: 18,
    path: '/treatments',
    isProtected: true,
    component: TreatmentsPage
  },
  {
    id: 19,
    path: '/sales',
    isProtected: true,
    component: SalesPage
  },
  // {
  //   id: 9,
  //   path: '/regions',
  //   isProtected: true,
  //   component: RegionsPage
  // },
  // {
  //   id: 10,
  //   path: '/regions',
  //   isProtected: true,
  //   component: RegionsPage
  // },
  // {
  //   id: 11,
  //   path: '/nationalities',
  //   isProtected: true,
  //   component: NationalitiesPage
  // },
  // {
  //   id: 12,
  //   path: '/privileges',
  //   isProtected: true,
  //   component: PrivilegesPage
  // },
  // {
  //   id: 13,
  //   path: '/commissariats',
  //   isProtected: true,
  //   component: CommissariatsPage
  // },
  // {
  //   id: 14,
  //   path: '/communities',
  //   isProtected: true,
  //   component: CommunitiesPage
  // },
  // {
  //   id: 15,
  //   path: '/groups',
  //   isProtected: true,
  //   component: GroupsPage
  // }
];
