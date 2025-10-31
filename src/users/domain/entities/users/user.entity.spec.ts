import { UserDataBuilderHelper } from '@/@common/domain/helpers/users/user-data-builder.helper'
import { UserProps } from '@/users/domain/types/user.props.types'
import { UserEntity } from './user.entity'

describe('UserEntity unit tests', () => {
    let props: UserProps
    let sut: UserEntity

    beforeEach(() => {
        props = UserDataBuilderHelper({});
        sut = new UserEntity(props)
    })

    it('constructor method', () => {
        expect(sut.props.name).toEqual(props.name)
        expect(sut.props.email).toEqual(props.email)
        expect(sut.props.password).toEqual(props.password)
        expect(sut.props.createdAt).toBeInstanceOf(Date)
    })

    it('should return by getter of name field corrected', () => {
        expect(sut.props.name).toBeDefined()
        expect(sut.props.name).toEqual(props.name)
        expect(typeof sut.props.name).toBe('string')
    })

    it('should return by getter of email corrected', () => {
        expect(sut.props.email).toBeDefined()
        expect(sut.props.email).toEqual(props.email)
        expect(typeof sut.props.email).toBe('string')
    })
    it('should return by getter of password corrected', () => {
        expect(sut.props.password).toBeDefined()
        expect(sut.props.password).toEqual(props.password)
        expect(typeof sut.props.password).toBe('string')
    })

    it('should return by getter of createdAt corrected', () => {
        expect(sut.props.createdAt).toBeDefined()
        expect(sut.props.createdAt).toBeInstanceOf(Date)
    })
})