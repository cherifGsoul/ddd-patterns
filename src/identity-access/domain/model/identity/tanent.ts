import assert from "assert"
import { Enablment } from "./enablment"
import { PasswordEncoder } from "./password-encoder"
import { Person } from "./person"
import { RegistrationInvite } from "./registration-invite"
import { TanentId } from "./tanent-id"
import { User } from "./user"
import { UserId } from "./user-id"

export class Tanent {
	#id: TanentId
	#name: string
	#description: string
	#registrationInvites: RegistrationInvite[]
	#active: boolean

	private constructor(id: TanentId, name: string, description: string, active: boolean) {
		this.#id = id
		this.#name = name
		this.#description = description
		this.#active = active
		this.#registrationInvites = []
	}

	public isInvitedForRegistration (inviteCode: string): boolean {
		assert(this.isActive())
		const invite = this.#registrationInvites.find((invite: RegistrationInvite) => {
			return invite.isIdentifiedBy(inviteCode)
		})
		if (!invite) {
			return false
		}

		return invite.isAvailable();
	}

	public registerUser(
		userId: UserId,
		person: Person,
		enablement: Enablment,
		username: string,
		password: string,
		inviteCode: string,
		passwordEncoder: PasswordEncoder
	): User {
		assert(this.isInvitedForRegistration(inviteCode))
		return User.register(userId, this.#id, person, enablement, username, password, passwordEncoder)
	}

	public isActive(): boolean {
		return this.#active
	}
}