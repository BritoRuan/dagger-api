import { UserDataBuilder } from '@/shared/testing/helpers/user/user-data.builder';
import { UserEntity } from './user.entity';
import { UserProps } from '../types/user-props.types';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let userEntity: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});

    userEntity = new UserEntity(props);
  });

  it('should initialize constructor method', () => {
    expect(userEntity.name).toEqual(props.name);
    expect(userEntity.email).toEqual(props.email);
    expect(userEntity.password).toEqual(props.password);
    expect(userEntity.createdAt).toBeInstanceOf(Date);
  });

  it('should return name by getter', () => {
    expect(userEntity.name).toBeDefined();
    expect(userEntity.name).toEqual(props.name);
    expect(typeof userEntity.name).toBe('string');
  });

  it('should return email by getter', () => {
    expect(userEntity.email).toBeDefined();
    expect(userEntity.email).toEqual(props.email);
    expect(typeof userEntity.props.email).toBe('string');
  });

  it('should return password by getter', () => {
    expect(userEntity.password).toBeDefined();
    expect(userEntity.password).toEqual(props.password);
    expect(typeof userEntity.password).toBe('string');
  });

  it('should return createdAt by getter', () => {
    expect(userEntity.createdAt).toBeDefined();
    expect(userEntity.createdAt).toBeInstanceOf(Date);
  });

  it('should update name by setter', () => {
    userEntity['name'] = 'other name';

    expect(userEntity.name).toBeDefined();
    expect(userEntity.props.name).toEqual('other name');
  });

  it('should update password by setter', () => {
    userEntity['password'] = 'other password';

    expect(userEntity.password).toBeDefined();
    expect(userEntity.props.password).toEqual('other password');
  });

  it('should update user name', () => {
    userEntity.update('other name');

    expect(userEntity.name).toBeDefined();
    expect(userEntity.props.name).toEqual('other name');
  });

  it('should update user password', () => {
    userEntity.updatePassword('other password');

    expect(userEntity.props.password).toEqual('other password');
  });
});
