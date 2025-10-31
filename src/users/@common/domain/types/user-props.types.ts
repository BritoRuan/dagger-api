type PropsTypes = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

type UserPropsTypes = Partial<PropsTypes>