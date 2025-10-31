import { UserProps } from '@/users/domain/types/user.props.types'
import { faker } from '@faker-js/faker'


export function UserDataBuilderHelper(props: UserPropsTypes): UserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.email ?? faker.internet.password(),
    createdAt: props.createdAt ?? new Date()
  }
}