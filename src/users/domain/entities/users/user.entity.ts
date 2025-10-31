import { BaseEntity } from "@/@common/domain/entities/entity"
import { UserProps } from "../../types/user.props.types"

export class UserEntity extends BaseEntity<UserProps> {
    constructor(public readonly props: UserProps, id?: string) {
        super(props, id)
        this.props.createdAt = this.props.createdAt ?? new Date()
    }

    get name() {
        return this.props.name
    }

    get email() {
        return this.props.email
    }

    get password() {
        return this.props.password
    }

    get createdAt() {
        return this.props.password
    }
}
