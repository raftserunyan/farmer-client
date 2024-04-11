import moment from 'moment';

import { StudentProfileLink } from 'components';
import store from 'redux/store';
import { Checkbox } from 'ui';
import { editSubject } from 'redux/actions/professions';
import { educationStatuses } from './educationStatuses';
import { educationBasis } from 'constants/educationBasis';
import { formatDate } from 'helpers';
import { ApproveCommand } from 'components/ApproveCommand';

export const tableColumns = {
	investments: [
		{
			Header: 'Գումար',
			accessor: 'amount',
		},
		{
			Header: 'Ամսաթիվ',
			accessor: ({ date }) => formatDate(date),
		},
	],
	credits: [
		{
			Header: 'Քաշ',
			accessor: 'weight',
			width: 150,
		},
		{
			Header: 'Գին (ԿԳ)',
			accessor: 'priceKG',
			width: 150,
		},
		{
			Header: 'Վճարված',
			accessor: 'paid',
			width: 150,
		},
		{
			Header: 'Ամսաթիվ',
			accessor: ({ date }) => formatDate(date),
			width: 150,
		},
		{
			Header: 'ԱրԺեք',
			accessor: 'cost',
			width: 180,
		},
		{
			Header: 'Պարտք',
			accessor: 'credit',
			width: 200,
		},
		{
			Header: 'Ապրանք',
			accessor: ({ product }) =>
				`${product.id} (ID) - ${product.name} - ${product.priceKG}`,
			width: 200,
		},
		{
			Header: 'Հաճախորդ',
			accessor: ({ customer }) =>
				`${customer.id} (ID) - ${customer.name} - ${customer.phoneNumber}`,
			width: 200,
		},
	],
	measurementUnits: [
		{
			Header: 'Անվանում',
			accessor: 'name',
		},
	],
	targets: [
		{
			Header: 'Անվանում',
			accessor: 'name',
		},
	],
	commandsHistory: [
		{
			Header: ' ',
			width: 200,
			accessor: ({ id }) => (
				<ApproveCommand commandId={id} />
			),
		},
		{
			Header: 'Անվանում',
			accessor: 'command.name',
		},
		{
			Header: 'Համար',
			accessor: 'commandNumber',
		},
		{
			Header: 'Ուսանող',
			accessor: ({ student }) =>
				`${student.firstname} ${
					student.lastname
				} ${formatDate(student.dateOfBirth)}`,
		},
		{
			Header: 'Կցագրող',
			accessor: ({ user }) =>
				`${user.name} ${user.surname}`,
		},
		{
			Header: 'Ստեղծման տարեթիվ',
			accessor: ({ affectDate }) => formatDate(affectDate),
		},
	],
	users: [
		{
			Header: 'Անուն',
			accessor: 'name',
		},
		{
			Header: 'Ազգանուն',
			accessor: 'surname',
		},
		{
			Header: 'Մուտքանուն',
			accessor: 'username',
		},
	],
	groups: [
		{
			Header: 'Համար',
			accessor: 'number',
		},
		{
			Header: 'Ստեղծման տարեթիվ',
			accessor: 'openedAt',
		},
		{
			Header: 'Մասնագիտություն',
			accessor: 'profession.abbreviation',
		},
		{
			Header: 'Ընթացիկ կուրս',
			accessor: 'currentSemester',
		},
		{
			Header: 'Վճար',
			accessor: 'fee',
		},
		{
			Header: 'Անվճար տեղերի քանակ',
			accessor: 'freePlacesCount',
		},
	],
	students: [
		{
			Header: 'Անձնական էջ',
			accessor: student => (
				<StudentProfileLink student={student} />
			),
		},
		{
			Header: 'Անուն',
			accessor: 'firstname',
		},
		{
			Header: 'Ազգանուն',
			accessor: 'lastname',
		},
		{
			Header: 'Հայրանուն',
			accessor: 'fathername',
		},
		{
			Header: 'Ծննդյան ամսաթիվ',
			accessor: ({ dateOfBirth }) =>
				moment(dateOfBirth).format('DD/MM/YYYY'),
		},
		{
			Header: 'Գրանցման հասցե',
			accessor: 'registrationAddress',
		},
		{
			Header: 'Բնակության հասցե',
			accessor: 'residentAddress',
		},
		{
			Header: 'Կրթության հիմք',
			accessor: ({ educationBasis: educationBasisVal }) =>
				educationBasis.find(
					el => el.value === educationBasisVal
				)?.label,
		},
		{
			Header: 'Հեռախոսահամարներ',
			accessor: 'contactNumbers[0]',
		},
		{
			Header: 'Ընդունման ամսաթիվ',
			accessor: ({ dateOfAcceptance }) =>
				moment(dateOfAcceptance).format('DD/MM/YYYY'),
		},
		{
			Header: 'Ընդունման հրամանի համար',
			accessor: 'acceptanceCommandNumber',
		},
		{
			Header: 'Ուսման ձև',
			accessor: ({ educationStatus }) =>
				educationStatuses.find(
					status => status.value === educationStatus
				)?.label,
		},
		{
			Header: 'Խումբ',
			accessor: 'group.number',
		},
		{
			Header: 'Ընթացիկ կուրս',
			accessor: 'currentSemester',
		},
		{
			Header: 'Քաղաքացիություն',
			accessor: 'citizenship.country',
		},
		{
			Header: 'Ազգություն',
			accessor: 'nationality.name',
		},
		{
			Header: 'Առողջական վիճակ',
			accessor: 'healthStatus.status',
		},
		{
			Header: 'Կարգավիճակ',
			accessor: 'status.name',
			width: 350,
		},
		{
			Header: 'Զինկոմիսարիատ',
			accessor: 'commissariat.name',
		},
		{
			Header: 'Անձը հաստատող փաստաթուղթ',
			accessor: 'socialCardNumber',
		},
	],
	rotationStudents: semestersForCalculation => {
		const arr = [
			{
				Header: 'Անուն',
				accessor: 'firstname',
			},
			{
				Header: 'Ազգանուն',
				accessor: 'lastname',
			},
			{
				Header: 'Ուսման ձև',
				accessor: row =>
					educationStatuses.find(
						status => status.value === row.educationStatus
					)?.label,
			},
		];

		for (const semester of semestersForCalculation) {
			arr.push({
				Header: `${semester} կիս.`,
				accessor: row => row.rates.semesters[semester],
				width: 125,
			});
		}

		arr.push({
			Header: 'Ընդհանուր',
			accessor: 'rates.total',
			width: 125,
		});

		return arr;
	},
	subjects: yearsCount => {
		const arr = [
			{
				Header: ' ',
				width: 80,
				accessor: row => row.number || '-',
			},
			{
				Header: 'Անվանում',
				accessor: 'name',
			},
		];

		for (let year = 1; year <= yearsCount * 2; year++) {
			arr.push({
				Header: `${year} կիս.`,
				onClick: subject => {
					const semesters = subject.semesters?.includes(
						year
					)
						? subject.semesters.filter(
								semester => semester !== year
						  )
						: Array.isArray(subject.semesters)
						? subject.semesters.concat(year)
						: [year];

					store.dispatch(
						editSubject(
							{
								semesters: semesters.length
									? semesters
									: null,
								id: subject.id,
								professionId: subject.professionId,
							},
							false
						)
					);
				},

				accessor: ({ semesters }) => {
					return (
						<Checkbox checked={semesters?.includes(year)} />
					);
				},
				width: 125,
			});
		}

		return arr;
	},
	profession: [
		{
			Header: 'Անվանում',
			accessor: 'name',
			width: 400,
		},
		{
			Header: 'Կոդ',
			accessor: 'code',
		},
		{
			Header: 'Հապավում',
			accessor: 'abbreviation',
		},
		{
			Header: 'Տարիների քանակ',
			accessor: 'yearsCount',
		},
		{
			Header: 'Համար',
			accessor: 'number',
		},
		{
			Header: 'Վճար',
			accessor: 'fee',
		},
		{
			Header: 'Անվճար տեղերի քանակ',
			accessor: 'freePlacesCount',
		},
	],
	customers: [
		{
			Header: 'Անուն',
			accessor: 'name',
		},
		{
			Header: 'Հասցե',
			accessor: 'address',
		},
		{
			Header: 'Հեռախոսահամար',
			accessor: 'phoneNumber',
		},
		{
			Header: 'Հաշվի համար',
			accessor: 'accountNumber',
		},
		{
			Header: 'Հվհհ',
			accessor: 'hvhh',
		},
	],
	healthStatus: [
		{
			Header: 'Անվանում',
			accessor: 'status',
		},
	],
	investment: [
		{
			Header: 'Գումար',
			accessor: 'amount',
		},
		{
			Header: 'Ամսաթիվ',
			accessor: ({ date }) => formatDate(date),
		},
		{
			Header: 'Ներդրող',
			accessor: ({ investor }) => investor?.name,
		},
	],
	investor: [
		{
			Header: 'Անուն',
			accessor: 'name',
		},
		{
			Header: 'Հեռախոսահամար',
			accessor: 'phoneNumber',
		},
	],
	product: [
		{
			Header: 'Անուն',
			accessor: 'name',
		},
		{
			Header: 'Գին (կգ)',
			accessor: 'priceKG',
		},
	],
	treatment: [
		{
			Header: 'Անվանում',
			accessor: 'drugName',
		},
		{
			Header: 'Քանակ',
			accessor: ({ drugAmount, measurementUnit }) =>
				`${drugAmount} ${measurementUnit?.name || ''}`,
		},
		{
			Header: 'Բուժված ապրանքներ ID ներ',
			accessor: ({ products }) =>
				products
					.map(product => `${product.id} - ${product.name}`)
					.join(', '), // treatedProductsIds
		},
		{
			Header: 'Ամսաթիվ',
			accessor: ({ date }) => formatDate(date),
		},
	],
	customer: [
		{
			Header: 'Անուն',
			accessor: 'name',
		},
		{
			Header: 'Հասցե',
			accessor: 'address',
		},
		{
			Header: 'Հեռախոսահամար',
			accessor: 'phoneNumber',
		},
		{
			Header: 'Հաշվեհամար',
			accessor: 'accountNumber',
		},
		{
			Header: 'ՀՎՀՀ',
			accessor: 'hvhh',
		},
	],
	expense: [
		{
			Header: 'Անվանում',
			accessor: 'name',
		},
		{
			Header: 'Գումար',
			accessor: 'amount',
		},
		{
			Header: 'Նպատակ',
			accessor: ({ target }) => target?.name,
		},
		{
			Header: 'Ներդրող',
			accessor: ({ investor }) => investor?.name,
		},
		{
			Header: 'Ամսաթիվ',
			accessor: ({ date }) => formatDate(date),
		},
	],
	investorExpenses: [
		{
			Header: 'Անվանում',
			accessor: 'name',
		},
		{
			Header: 'Գումար',
			accessor: 'amount',
		},
		{
			Header: 'Նպատակ',
			accessor: ({ target }) => target?.name,
		},
		{
			Header: 'Ամսաթիվ',
			accessor: ({ date }) => formatDate(date),
		},
	],
	sales: [
		{
			Header: 'Ապրանք',
			accessor: ({ product }) => product?.name,
		},
		{
			Header: 'Քաշ',
			accessor: 'weight',
		},
		{
			Header: 'Գին (կգ)',
			accessor: 'priceKG',
		},
		{
			Header: 'Հաճախորդ',
			accessor: ({ customer }) =>
				`${customer.name} - ${customer.phoneNumber}`,
		},
		{
			Header: 'Վճարված գումար',
			accessor: 'paid',
		},
		{
			Header: 'Պարտք',
			accessor: 'credit',
		},
		{
			Header: 'Ամսաթիվ',
			accessor: ({ date }) =>
				moment(date).format('DD/MM/YYYY'),
		},
	],
	region: [
		{
			Header: 'Անվանում',
			accessor: 'name',
		},
	],
	nationality: [
		{
			Header: 'Անվանում',
			accessor: 'name',
		},
	],
	privilege: [
		{
			Header: 'Անվանում',
			accessor: 'name',
		},
	],
	commissariat: [
		{
			Header: 'Անվանում',
			accessor: 'name',
		},
		{
			Header: 'Համար',
			accessor: 'number',
		},
		{
			Header: 'Նկարագրություն',
			accessor: 'description',
		},
	],
	community: [
		{
			Header: 'Անվանում',
			accessor: 'name',
		},
		{
			Header: 'Մարզ',
			accessor: 'region.name',
		},
		{
			Header: 'Սահմանամերձ',
			accessor: ({ isFrontier }) =>
				isFrontier ? 'Այո' : 'Ոչ',
		},
	],
	commands: [
		{
			Header: 'Անվանում',
			accessor: 'name',
		},
		{
			Header: 'Փոփոխելի դաշտեր',
			accessor: ({ changeableColumns = {} }) =>
				Object.keys(changeableColumns || {})
					.map(
						column =>
							tableColumns.students.find(
								el =>
									el.accessor.split?.('.')[0] ===
									column.replaceAll('Id', '')
							)?.Header
					)
					.filter(el => el)
					.join(', '),
		},
	],
	commandHistory: [
		{
			Header: 'Հրամանի համար',
			accessor: 'commandNumber',
		},
		{
			Header: 'Հրամանի անվանում',
			accessor: 'command.name',
		},
		{
			Header: 'Կցագրող',
			accessor: ({ user }) =>
				`${user.name} ${user.surname}`,
		},
		{
			Header: 'Կցագրման ամսաթիվ',
			accessor: ({ affectDate }) =>
				moment(affectDate).format('DD/MM/YYYY'),
		},
	],
};
