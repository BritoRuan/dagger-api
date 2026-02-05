import { ClassValidatorFields } from '../../class-validator-fields';
import * as classValidator from 'class-validator';

class StubClassValidatorFields extends ClassValidatorFields<{
  field: string;
}> {}

describe('ClassValidatorFields unit tests', () => {
  it('should initialize errors and validateData variables with null', () => {
    const sut = new StubClassValidatorFields();

    expect(sut.errors).toMatchObject({});
    expect(sut.validatedData).toMatchObject({});
  });

  it('should validate with errors', () => {
    const spyValidateSync = jest.spyOn(classValidator, 'validateSync');
    const sut = new StubClassValidatorFields();

    spyValidateSync.mockReturnValue([
      { property: 'field', constraints: { isRequired: 'test error' } },
    ]);

    expect(sut.validate(null)).toBeFalsy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toMatchObject({});
    expect(sut.errors).toStrictEqual({ field: ['test error'] });
  });

  it('should validate without errors', () => {
    const spyValidateSync = jest.spyOn(classValidator, 'validateSync');
    const sut = new StubClassValidatorFields();

    spyValidateSync.mockReturnValue([]);

    expect(sut.validate({ field: 'string' })).toBeTruthy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toMatchObject({ field: 'string' });
    expect(sut.errors).toStrictEqual({});
  });
});
