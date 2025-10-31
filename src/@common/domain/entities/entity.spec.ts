import { BaseEntity } from "./entity";

type StubProps = {
  prop1: string,
  prop2: number
}

function uuidValidate(uuid: string): boolean {
  const regex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i;
  return regex.test(uuid);
}

class StubEntity extends BaseEntity<StubProps> { }

describe('BaseEntity unit tests', () => {
  it('should set props and return id', () => {
    const props = { prop1: 'value1', prop2: 21 }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('should accept a validate uuid', () => {
    const props = { prop1: 'value5', prop2: 29 }
    const id = '31234cf5-2925-45c5-9911-ea7bb24a1e04'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('should convert a entity to a json', () => {
    const props = { prop1: 'value76524', prop2: 1 }
    const id = '31234cf5-2925-45c5-9911-ea7bb24a1e04'
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props
    })
  })
})