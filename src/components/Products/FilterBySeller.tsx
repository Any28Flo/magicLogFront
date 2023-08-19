import {
	Flex,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Select,
	Button,
	SimpleGrid,
} from '@chakra-ui/react';
import { useState } from 'react';
interface User {
	email: string
	uid: string
}
interface FilterByAdminProps {
	users: User[]
	handleSubmit: (filter: any) => void
}

const FilterByAdmin = ({ users, handleSubmit }: FilterByAdminProps): JSX.Element => {
	const [selectedOption, setSelectedOption] = useState('');
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
	};
	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		handleSubmit(selectedOption)
	};
	return (
		<form onSubmit={onSubmit}>
			<SimpleGrid columns={2} spacing={10} alignItems='bottom'>

				<FormControl alignItems='center'>
					<Select placeholder='' value={selectedOption} onChange={handleSelectChange}>
						<option value="">Selecciona usuario...</option>
						{
							users.map((user: User) => {
								return (
									<option key={user.uid} value={user.uid}>{user.email}</option>
								)
							})
						}
					</Select>
				</FormControl>

				<Button type="submit" colorScheme="blue">
					Buscar
				</Button>

			</SimpleGrid >
		</form>
	);
}

export default FilterByAdmin;
