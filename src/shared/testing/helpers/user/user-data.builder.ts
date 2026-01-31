import { faker } from '@faker-js/faker';
import { UserProps } from '@/users/domain/types/user-props.types';

export function UserDataBuilder(props: Partial<UserProps>): UserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.email(),
    createdAt: props.createdAt ?? new Date(),
  };
}
